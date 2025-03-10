import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select,
  Spin,
} from "antd";
import styles from "./header.module.scss";
import logo from "../../assets/Polo_Logo_Png[1] 1.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import call from "../../assets/call.png";
import { WhatsApp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../Redux/loginModalSlice";
import { login } from "../../Redux/AuthSlice";
import switchIcon from "../../assets/sWITCH (1).png";

interface CountryFlags {
  name: string;
  flag: string;
  dial_code: string;
}

const HeaderComponent = () => {
  const navigate = useNavigate();
  const BASEURL = import.meta.env.VITE_BASEURL;
  const location = useLocation();

  const dispatch = useDispatch();
  const loginModal = useSelector((state: any) => state?.login?.value);

  const [isOpen, setIsOpen] = useState(false);

  const [enterOtp, setEnterOtp] = useState(false);

  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const [currentPHoneNumber, setCurrentPhoneNumber] = useState<number>();

  const [countryCode, setCountryCode] = useState<any>();

  const [loading, setLoading] = useState(false);

  const [logoData, setLogodata] = useState<any>([]);

  const [callUsModal, setCallUsModal] = useState<boolean>(false);

  const [countries, setCountries] = useState<[CountryFlags]>([
    {
      name: "IN",
      flag: "https://cdn.countryflags.com/thumbs/india/flag-400.png",
      dial_code: "+91",
    },
  ]);

  const [form] = Form.useForm();
  const [loginForm] = Form.useForm();

  const AboutUsStyle = {
    marginTop: "2vh",
  };

  const getLogos = async () => {
    try {
      const response = await axios.get(`${BASEURL}/socialmedia/items/`);
      console.log(response);
      setLogodata(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserCount = async () => {
    try {
      const response = await axios.post(`${BASEURL}/visitors/log-visitor`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateUserCount();
    getLogos();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const [flagsRes, codesRes] = await Promise.all([
          axios.get(
            "https://countriesnow.space/api/v0.1/countries/flag/images"
          ),
          axios.get("https://countriesnow.space/api/v0.1/countries/codes"),
        ]);

        const mergedData: [CountryFlags] = flagsRes.data.data.map(
          (flag: any) => {
            const codeData = codesRes.data.data.find(
              (code: any) => code.name === flag.name
            );
            return {
              name: codeData?.code,
              flag: flag.flag,
              dial_code: codeData ? codeData.dial_code : "",
            };
          }
        );

        setCountries(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  const options = useMemo(
    () =>
      countries?.map((country: CountryFlags) => ({
        value: country.dial_code,
        label: (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src={country.flag}
              alt={country.name}
              width="20"
              height="15"
              style={{ borderRadius: "2px" }}
              loading="lazy"
            />
            {country.name} ({country.dial_code})
          </div>
        ),
      })),
    [countries]
  );

  const manageRegistration = async (values: any) => {
    try {
      const newValues = {
        ...values,
        country_code: values?.country_code?.replace("+", ""),
      };
      const response = await axios.post(
        `${BASEURL}/user/create_user`,
        newValues
      );
      if (response?.status === 200) {
        message.success("Added user SuccessFully");
        dispatch(updateState(false));
        setLoginOrRegister(!loginOrRegister);
        form.resetFields();
      }
    } catch (error) {
      console.error(error);
      message.error("Unable to create Agent");
    }
  };

  const manageLogin = async (values: any) => {
    try {
      setLoading(true);
      const country_code = values?.country_code?.replace("+", "");
      const response = await axios.post(
        `${BASEURL}/otp/send-otp?phone_number=${values?.phone_number}&country_code=${country_code}`
      );
      console.log(response);
      setCurrentPhoneNumber(values?.phone_number);
      setCountryCode(country_code);
      setEnterOtp(true);
      message.success("OTP sent successfully");
    } catch (error: any) {
      console.error(error);
      message.warning("user not registered please register before login");
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  const handleFormSubmit = async (values: any) => {
    if (loginOrRegister) {
      manageRegistration(values);
    } else {
      manageLogin(values);
    }
  };

  const handleOtpSubmit = async (values: any) => {
    const data = countryCode;
    try {
      const response = await axios.post(
        `${BASEURL}/otp/verify-otp?phone_number=${currentPHoneNumber}&otp=${values?.otp}&country_code=${data}`
      );
      console.log(response);

      if (response?.status === 200) {
        message.success("Login Success");
        dispatch(updateState(false));
        form.resetFields();
        if (response?.data?.role === "Admin") {
          dispatch(
            login({
              role: response?.data?.role,
              permissions: response?.data?.permissions,
              token: response?.data?.access_token,
              userName: response?.data?.name,
            })
          );
        } else {
          dispatch(
            login({
              role: response?.data?.role,
              permissions: {},
              userName: response?.data?.name,
              token: response?.data?.access_token,
            })
          );
        }

        if (response?.data?.role !== "User") {
          navigate("/admin");
        } else if (response?.data?.role === "User") {
          navigate("/pages");
        }
        setEnterOtp(!enterOtp);
      }
    } catch (error: any) {
      console.error(error);
      if (
        error?.status === 404 &&
        error?.response?.data?.detail ===
          "Phone number not found in any user tables"
      ) {
        message.warning("user not registered");
        form.resetFields();
        setLoginOrRegister(!loginOrRegister);
      } else {
        setEnterOtp(true);
        message.error("Unable Login please check the password and username");
      }
    }
  };

  return (
    <Row
      style={{
        lineHeight: "0",
      }}
      gutter={[20, 20]}
      justify={"space-around"}
    >
      <Col span={2}>
        <img src={logo} style={{ height: "100%", width: "100%" }} alt="Logo" />
      </Col>
      <Col
        className={styles.Hover}
        span={6}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      ></Col>
      <Col
        span={10}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className={styles.Hover}
      >
        {logoData?.map((item: any) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: "20px",
                fontWeight: "500",
              }}
              onClick={() => {
                window.open(item?.link, "_blank"); // Opens in a new tab
                // Or use window.location.href = "https://www.example.com"; // Opens in the same tab
              }}
            >
              <img
                src={`data:image/png;base64,${item.image_base64}`}
                alt="Play Icon"
                style={{ width: "25px" }}
              />
            </div>
          );
        })}
        {location.pathname !== "/admin" && (
          <div
            onClick={() => setCallUsModal(true)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <img
              src={call}
              alt="Play Icon"
              style={{ width: "15px", marginRight: "0.5rem" }}
            />
            Call Us
          </div>
        )}

        <div>
          <img
            onClick={() => {
              window.location.href = "https://polo.game";
            }}
            src={switchIcon}
            style={{ height: "7vh", width: "100%"  , borderRadius:"2vh"}}
          ></img>
        </div>
      </Col>
      <Modal
        open={isOpen}
        footer=""
        onClose={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <Card
          title={
            <Row
              justify={"center"}
              style={{ backgroundColor: "inherit", marginBottom: "2vh" }}
            >
              <img
                src={logo} // Replace with the actual path to your logo
                alt="Polo Games Logo"
                style={{ height: "50px" }}
              />
            </Row>
          }
        >
          <Row
            justify="center"
            style={{ color: "white", fontFamily: "Popins" }}
          >
            <h1>Welcome to Polo.Game</h1>
            <p>
              Your ultimate destination for an exhilarating and secure online
              betting experience! At Polo.Game, we bring together the best in
              sports betting, innovative technology, and a user-friendly
              interface to provide an unparalleled gaming environment. Whether
              you're a seasoned bettor or a first-time player, our platform
              offers a variety of exciting betting options across numerous
              sports and events.
            </p>
            <p>
              We prioritize transparency, fairness, and security, ensuring that
              every wager you place is met with the highest standards of
              reliability. At Polo.Game, we believe in bringing the excitement
              of betting to you with a touch of class and reliability.
              Established in 2016, we are a UK-based betting website dedicated
              to providing a top-tier betting experience for all our customers.
              Whether you're a seasoned bettor or just starting, we have
              something for everyone.
            </p>

            <h3 style={AboutUsStyle}>Our Mission</h3>
            <p>
              Our mission is simple: to offer a safe, fair, and exhilarating
              betting environment. We strive to enhance your betting experience
              with an intuitive platform, extensive market options, and
              exceptional customer service.
            </p>

            <h3 style={AboutUsStyle}>What We Offer</h3>
            <ul>
              <li>
                <strong>Comprehensive Betting Markets:</strong> Polo.Game covers
                a wide range of sports and events from football and horse racing
                to casinos and beyond. We offer competitive odds and numerous
                betting options to suit all preferences.
              </li>
              <li>
                <strong>Live Betting:</strong> Enjoy the thrill of in-play
                betting with real-time updates and live odds. Our live betting
                platform ensures you never miss a moment of the action.
              </li>
              <li>
                <strong>Casino Games:</strong> For those who enjoy various
                games, our online casino features multiple slots, table games,
                and live dealer experiences. It's the perfect place to unwind
                and enjoy some leisure time.
              </li>
              <li>
                <strong>Promotions and Bonuses:</strong> We reward our customers
                with generous promotions and bonuses. From welcome offers to
                loyalty rewards, there's always something to boost your betting
                experience at Polo.Game.
              </li>
            </ul>

            <h3 style={AboutUsStyle}>Safety and Security</h3>
            <p>
              Your security is our top priority. Polo.Game operates under a
              strict regulatory framework set by the UK Gambling Commission,
              ensuring a fair and transparent betting environment.
            </p>

            <h3 style={AboutUsStyle}>Responsible Gambling</h3>
            <p>
              At Polo.Game, we promote responsible gambling. We provide tools
              and resources to help you stay in control, including
              self-exclusion options, deposit limits, and access to support
              organisations. Your well-being is important to us, and we are
              committed to providing a safe and enjoyable betting experience.
            </p>

            <h3 style={AboutUsStyle}>Customer Support</h3>
            <p>
              Our dedicated customer support team is available 24/7. Whether you
              have a question about your account, need help with a bet, or
              require technical assistance, we're just a click or a call away.
            </p>
          </Row>
        </Card>
      </Modal>
      <Modal
        open={loginModal}
        onClose={() => {
          setEnterOtp(false);
          dispatch(updateState(false));
        }}
        onCancel={() => {
          setEnterOtp(false);
          dispatch(updateState(false));
        }}
        footer={""}
      >
        <Card
          title={
            <Row
              justify={"center"}
              style={{ backgroundColor: "inherit", marginBottom: "2vh" }}
            >
              <img
                src={logo}
                alt="Polo Games Logo"
                style={{ height: "50px" }}
              />
            </Row>
          }
        >
          <Row justify={"center"} align={"bottom"}>
            {!loginOrRegister ? (
              <>
                {!enterOtp && (
                  <Spin spinning={loading}>
                    <Form
                      style={{ color: "white" }}
                      form={loginForm}
                      onFinish={handleFormSubmit}
                    >
                      <Row justify={"space-around"}>
                        <Col span={12}>
                          <Form.Item
                            name="country_code"
                            label="Country Code"
                            rules={[
                              {
                                required: true,
                                message: "Please select a country code!",
                              },
                            ]}
                          >
                            {loading ? (
                              <Spin />
                            ) : (
                              <Select
                                placeholder="Select country"
                                showSearch
                                optionFilterProp="label"
                                filterOption={(input, option) =>
                                  option?.label.props.children
                                    .join("")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                                options={options}
                              />
                            )}
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            name="phone_number"
                            label="Phone Number"
                            rules={[{ required: true }]}
                          >
                            <Input placeholder="9999999999" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={[20, 20]} justify={"end"}>
                        <Button
                          style={{ backgroundColor: "#73d13d", color: "white" }}
                          type="default"
                          htmlType="submit"
                        >
                          Get OTP
                        </Button>
                      </Row>
                    </Form>
                    <Row style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                      <Button
                        onClick={() => {
                          const phoneNumber = "9333333330";
                          const message =
                            "Hello, I would like to connect with you!";
                          const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                            message
                          )}`;
                          window.open(whatsappURL, "_blank");
                        }}
                        style={{
                          padding: "2vh",
                          borderRadius: "1rem",
                          height: "6vh",
                          width: "100%",
                          background:
                            "linear-gradient(90deg, #940101 0%, #4560FD 100%)",
                          color: "white",
                          fontFamily: "Poppins",
                        }}
                        icon={<WhatsApp></WhatsApp>}
                      >
                        WhatsApp Now
                      </Button>
                    </Row>
                    <Row
                      justify={"center"}
                      style={{ color: "white", fontFamily: "Popins" }}
                    >
                      <p>
                        Don't have an account ?{" "}
                        <span
                          onClick={() => setLoginOrRegister(true)}
                          style={{
                            color: "#940101",
                            fontSize: "16px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          Register
                        </span>
                      </p>
                    </Row>
                  </Spin>
                )}

                {enterOtp && (
                  <Form
                    style={{ color: "white" }}
                    form={form}
                    onFinish={handleOtpSubmit}
                  >
                    <Form.Item
                      name="otp"
                      label="Enter OTP"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Enter your OTP" />
                    </Form.Item>
                    <Row gutter={[20, 20]} justify={"center"}>
                      <Button
                        style={{ backgroundColor: "#73d13d", color: "white" }}
                        type="default"
                        htmlType="submit"
                      >
                        Verify OTP
                      </Button>
                    </Row>
                  </Form>
                )}
              </>
            ) : (
              <>
                <Row>
                  <Form
                    style={{ color: "white" }}
                    form={form}
                    onFinish={handleFormSubmit}
                  >
                    <Form.Item
                      name="username"
                      label="User Name"
                      rules={[
                        { required: true, message: "User Name is required" },
                      ]}
                    >
                      <Input placeholder="Enter your username" />
                    </Form.Item>

                    <Row gutter={16}>
                      <Col span={10}>
                        <Form.Item
                          name="country_code"
                          label="Country Code"
                          rules={[
                            {
                              required: true,
                              message: "Please select a country code!",
                            },
                          ]}
                        >
                          {loading ? (
                            <Spin />
                          ) : (
                            <Select
                              placeholder="Select country"
                              showSearch
                              optionFilterProp="label"
                              filterOption={(input, option) =>
                                option?.label.props.children
                                  .join("")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={options}
                            />
                          )}
                        </Form.Item>
                      </Col>

                      <Col span={14}>
                        <Form.Item
                          name="phone_number"
                          label="Phone Number"
                          rules={[
                            {
                              required: true,
                              message: "Phone Number is required",
                            },
                            {
                              pattern: /^[0-9]{8,13}$/,
                              message:
                                "Phone Number must be 8 to 13 digits long",
                            },
                          ]}
                        >
                          <Input placeholder="Enter Phone Number" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="selected_site"
                      label="Select Site"
                      rules={[{ required: true, message: "Site is required" }]}
                    >
                      <Select placeholder="Select a site">
                        <Select.Option value="bet365">
                          https://www.realsport9.com
                        </Select.Option>
                        <Select.Option value="betway">
                          https://www.skyexch.art{" "}
                        </Select.Option>
                        <Select.Option value="unibet">
                          https://world77.co
                        </Select.Option>
                        <Select.Option value="williamhill">
                          https://realsport247.com
                        </Select.Option>
                        <Select.Option value="paddypower">
                          https://tiger365.me/login
                        </Select.Option>
                      </Select>
                    </Form.Item>

                    <Row gutter={[20, 20]} justify={"space-between"}>
                      <Button
                        type="primary"
                        onClick={() => dispatch(updateState(false))}
                      >
                        Cancel
                      </Button>
                      <Button
                        style={{ backgroundColor: "#73d13d" }}
                        type="default"
                        htmlType="submit"
                      >
                        Register
                      </Button>
                    </Row>
                  </Form>
                </Row>
                <Row
                  justify={"center"}
                  style={{ color: "white", fontFamily: "Popins" }}
                >
                  <p>
                    Already have an account ?{" "}
                    <span
                      onClick={() => setLoginOrRegister(false)}
                      style={{
                        color: "#940101",
                        fontSize: "16px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </span>
                  </p>
                </Row>
                <Row
                  justify={"center"}
                  style={{ fontFamily: "Poppins" }}
                  gutter={[16, 16]}
                >
                  <Col
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    span={24}
                  >
                    OR
                  </Col>
                  <Col
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    span={24}
                  >
                    Get Your Ready-Made ID From WhatsApp
                  </Col>
                  <Col
                    span={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={() => {
                        const phoneNumber = "9333333330";
                        const message =
                          "Hello, I would like to connect with you!";
                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappURL, "_blank");
                      }}
                      style={{
                        padding: "2vh",
                        borderRadius: "1rem",
                        height: "6vh",
                        width: "100%",
                        background:
                          "linear-gradient(90deg, #940101 0%, #4560FD 100%)",
                        color: "white",
                        fontFamily: "Poppins",
                      }}
                      icon={<WhatsApp></WhatsApp>}
                    >
                      WhatsApp Now
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Row>
        </Card>
      </Modal>
      <Modal
        open={callUsModal}
        footer=""
        onClose={() => setCallUsModal(false)}
        onCancel={() => setCallUsModal(false)}
      >
        <Card
          title={
            <Row
              justify={"center"}
              style={{ backgroundColor: "inherit", marginBottom: "2vh" }}
            >
              <img
                src={logo} // Replace with the actual path to your logo
                alt="Polo Games Logo"
                style={{ height: "50px" }}
              />
            </Row>
          }
        >
          <Row justify={"center"}>
            <h2 style={{ color: "white", fontFamily: "Popins" }}>
              Please call us on +91 9333333330{" "}
            </h2>
          </Row>
        </Card>
      </Modal>
    </Row>
  );
};

export default HeaderComponent;
