import axios from "axios";
import styles from "./matchPage.module.scss";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Col, Row, Spin } from "antd";

interface Props {
  apiurl: string;
}

const MatchPage = (data: Props) => {
  const { id } = useParams();
  const location = useLocation();
  const BASEURL = import.meta.env.VITE_BASEURL;

  const [datasource, setDataSource] = useState<any>([]);
  const [matchData, setMatchData] = useState<any>();

  const [loading, setLoading] = useState(false);

  const getApiData = async (id: any) => {
    try {
      setLoading(true);
      const URL = `${data?.apiurl}?eventId=${id}`;
      const BaseURL = `${BASEURL}/match/fetch-data`;
      const response = await axios.post(BaseURL, {
        url: URL,
      });
      const ApiData = response?.data;
      if (ApiData?.success === true) {
        setDataSource(ApiData?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const colors = [
    "rgba(50, 163, 188, 1)",
    "rgba(200, 109, 220, 1)",
    "rgba(50, 163, 188, 1)",
    "rgba(50, 163, 188, 1)",
    "rgba(200, 109, 220, 1)",
    "rgba(50, 163, 188, 1)",
  ];

  useEffect(() => {
    getApiData(id);
    console.log(location?.state)
    setMatchData(location?.state);
  }, []);

  return (
    <Spin spinning={loading}>
      <>
        {datasource?.length === 0 && loading === false ? (
          <Row
            justify={"center"}
            style={{ fontFamily: "Popins", color: "white" }}
          >
            <h1>No Data Available For this Event...</h1>
          </Row>
        ) : (
          <div>
            <Spin spinning={loading}>
              <div className={styles.tableWrapperHeader}>
                <Row justify={"center"} style={{marginBottom:"2vh" , fontFamily:"Popins"}}>
                  <Col span={24}>
                    <h3>{!loading && matchData?.time}</h3>
                  </Col>
                </Row>
                <Row style={{ height: "40%", width: "100%" }}>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "18px",
                      borderRadius: "4vh",
                      fontFamily: "Popins",
                      background:
                        "linear-gradient(to right, rgba(128, 0, 128, 0) 0%, purple 100%)",
                    }}
                    span={10}
                  >
                    {" "}
                    {datasource[0]?.section[0]?.nat}
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "24px",
                      fontFamily: "Popins",
                    }}
                    span={4}
                  >
                    v/s
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "18px",
                      borderRadius: "4vh",
                      fontFamily: "Popins",
                      background:
                        "linear-gradient(to right, purple 0%, rgba(128, 0, 128, 0) 100%)",
                    }}
                    span={10}
                  >
                    {" "}
                    {datasource[0]?.section[1]?.nat}
                  </Col>
                </Row>
              </div>
            </Spin>

            {datasource?.map((value: any) => {
              return (
                <>
                  <div className={styles.tableWrapper}>
                    <h3 style={{ margin: 0, fontFamily: "Popins" }}>
                      {value?.mname?.replaceAll("_", " ")}
                    </h3>
                  </div>
                  {value?.section?.map((item: any) => (
                    <div key={item.key} className={styles.tableHeader}>
                      <div
                        style={{
                          flex: 2,
                          marginRight: "16px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              marginBottom: "1vh",
                            }}
                          >
                            {item?.nat?.length > 25
                              ? `${item?.nat?.substr(0, 25)}...`
                              : item?.nat}
                          </div>
                        </div>
                      </div>

                      <Row
                        gutter={8}
                        style={{ flex: 3, justifyContent: "space-between" }}
                      >
                        {item.odds.map((item: any, index: number) => (
                          <Col
                            span={3}
                            key={index}
                            style={{
                              background: colors[index],
                              padding: "8px",
                              textAlign: "center",
                              borderRadius: "2vh",
                              color: "white",
                            }}
                          >
                            <div style={{ fontWeight: "bold" }}>
                              {item.odds}
                            </div>
                            <div style={{ fontSize: "10px", color: "#666" }}>
                              {item.size}
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  ))}
                </>
              );
            })}
          </div>
        )}
      </>
    </Spin>
  );
};

export default MatchPage;
