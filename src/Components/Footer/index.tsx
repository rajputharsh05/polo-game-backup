import { Row, Col, Divider, Typography, Space, Modal, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./newFooter.module.scss";
import logo from "../../assets/Polo_Logo_Png[1] 1.png";
import { useState } from "react";

const Footer = () => {
  const [clickedItem, setClickedItem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const AboutUsStyle = {
    marginTop: "2vh",
  };
  const sectionStyle = {
    color: "#000 !important", // Black color
    fontFamily: "Poppins, sans-serif",
    lineHeight: "1.6",
    marginBottom: "1em",
  };

  const titleStyle = {
    color: "white", // Black color
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    marginBottom: "0.5em",
  };

  const responsibleGaming = (
    <Row justify={"center"} style={{ fontFamily: "Popins" }}>
      <h1>Responsible Gaming</h1>
      <p>
        <strong>Polo.Game</strong> is committed to endorsing responsible gaming
        as a policy of customer care and social responsibility. We believe it is
        our responsibility to you, our customers, to ensure that you enjoy your
        wagering experience on our site while remaining fully aware of the
        social and financial harms associated with problem gambling.
      </p>

      <h3>Maintaining Control</h3>
      <p>
        Gambling should be treated as a fun pastime, and not a means to generate
        income. While most of the population can treat gambling as recreation
        and spend only what they can afford to risk, for some, it can be more
        difficult. To maintain control of your gambling habits, always consider
        the following points:
      </p>
      <ul>
        <li>
          Gambling should be done in moderation and undertaken as a form of
          leisure, not as a genuine way of making money.
        </li>
        <li>Avoid chasing losses – there will always be another day.</li>
        <li>Only gamble when you can cover the losses.</li>
        <li>
          Keep track of the time and monitor the amount of money you spend.
        </li>
        <li>
          Should you need a break from gambling, self-exclusion from one or all
          products can be activated by contacting Support.
        </li>
      </ul>

      <h3>Do You Have a Problem?</h3>
      <p>The following questions may help you find out:</p>
      <ol>
        <li>Does gambling prevent you from attending work or college?</li>
        <li>Do you gamble to pass time or to escape boredom?</li>
        <li>Do you gamble alone for long periods of time?</li>
        <li>Have others ever criticized you for your gambling?</li>
        <li>
          Have you lost interest in family, friends, or hobbies due to gambling?
        </li>
        <li>
          Have you ever lied to cover up the amount of money or time you spend
          gambling?
        </li>
        <li>
          Have you lied, stolen, or borrowed in order to maintain betting
          habits?
        </li>
        <li>Are you reluctant to spend "gambling money" on anything else?</li>
        <li>Do you gamble until you lose all your money?</li>
        <li>
          After losing, do you feel that you have to try and win back the losses
          as soon as possible?
        </li>
        <li>
          If you run out of money when gambling, do you feel lost and in despair
          and feel the need to gamble again as soon as possible?
        </li>
        <li>
          Do arguments, frustrations, or disappointments make you want to
          gamble?
        </li>
        <li>Does gambling make you depressed or even suicidal?</li>
      </ol>
      <p>
        The more questions you answer "yes" to, the more likely it is that you
        are having difficulties with your gambling. To speak with someone who
        can give you advice and support, please contact one of the organisations
        detailed below.
      </p>

      <h3>Gambling Counselling Organisations</h3>
      <ul>
        <li>
          <strong>GamCare:</strong> The leading authority providing counselling,
          advice, and practical help in addressing the social impact of gambling
          in the UK. Visit:{" "}
          <a href="http://www.gamcare.org.uk">www.gamcare.org.uk</a>.
          Confidential helpline: 0845 6000 133. Non-UK residents can contact
          GamCare for details of international support organisations.
        </li>
        <li>
          <strong>Gamblers Anonymous:</strong> A fellowship of men and women who
          help themselves and others deal with gambling problems. Visit:{" "}
          <a href="http://www.gamblersanonymous.org.uk">
            www.gamblersanonymous.org.uk
          </a>
          .
        </li>
        <li>
          <strong>Gambling Therapy:</strong> Provides support and counselling
          for anyone affected by gambling. Visit:{" "}
          <a href="http://www.gamblingtherapy.org">www.gamblingtherapy.org</a>.
        </li>
      </ul>

      <h3>Deposit Limits</h3>
      <p>
        Polo.Game provides a Deposit Limit within each customer account to
        assist in gambling responsibly. This option can be accessed in the "My
        Account" section. A decrease in the deposit limit takes effect
        immediately, while an increase requires a 24-hour cooling-off period to
        avoid rash decisions. For more information, contact Support.
      </p>

      <h3>Play Break</h3>
      <p>
        We provide a Play Break facility that allows customers to temporarily
        close their account for a period of 24 hours to 6 weeks. During this
        time, the account cannot be reactivated under any circumstances.
      </p>

      <h3>Self-Exclusion</h3>
      <p>
        If you need a longer break from gambling, our self-exclusion facility
        ensures your account remains closed for at least 6 months. This requires
        a written request to reopen the account after the exclusion period. We
        recommend contacting all gambling companies you have accounts with to
        self-exclude. Consider installing filtering software to block access to
        gambling websites.
      </p>
      <p>
        You may also register with <strong>GAMSTOP</strong>, a free service that
        enables self-exclusion from participating online gambling companies
        licensed in Great Britain. Visit:{" "}
        <a href="http://www.gamstop.co.uk">www.gamstop.co.uk</a>.
      </p>

      <h3>Underage Gambling</h3>
      <p>
        It is illegal for anyone under 18 to open an account or gamble on
        Polo.Game. We perform age verification checks and encourage using
        filtering systems to prevent underage access.
      </p>
    </Row>
  );

  const KYC = <Row></Row>;

  const FAQ = (
    <Row justify={"center"} style={{ color: "white", fontFamily: "Popins" }}>
      <h3>Which payment methods do you accept?</h3>
      <p>
        We accept the following payment methods: UPI, Netbanking, Hawala,
        Mastercard, Visa, and Bank Transfer.
      </p>

      <h3>How long will my withdrawal request take?</h3>
      <p>
        The clearance time for a withdrawal depends on the payment method used.
        Withdrawals made to UPI or bank accounts typically take 10 minutes.
      </p>

      <h3>How do I make a deposit?</h3>
      <p>
        To make a deposit, ensure you are logged into your account. Navigate to
        the "Account" section and deposit funds in the "Top Up" section. If you
        attempt to place a bet without sufficient funds, you can make a quick
        deposit directly from your betslip. Alternatively, you can also request
        assistance via WhatsApp.
      </p>

      <h3>How do I make a withdrawal?</h3>
      <p>
        To withdraw funds, log into your account and select the "Withdraw"
        option in the "Account" tab. You can withdraw available funds to your
        active payment method. Additionally, you can request assistance via
        WhatsApp.
      </p>
      <p>
        You can add or edit your payment details in your account section. If you
        have used multiple payment methods to deposit, withdrawals will be
        processed proportionally between those methods. Once your withdrawal
        request is submitted, it will be reviewed, and you will receive a
        confirmation via email.
      </p>

      <h3>Which currencies can I deposit in?</h3>
      <p>
        Currently, we accept deposits in INR and USDT. Please ensure you select
        your preferred currency carefully, as it cannot be changed once chosen.
      </p>

      <h3>Why is my bank card being declined?</h3>
      <p>
        First, verify that you have entered all the required information
        correctly. If the transaction is still declined, contact your bank. Some
        banks may block deposits to bookmakers as part of their fraud detection
        measures.
      </p>

      <h3>How do I make a complaint about the settlement of a bet?</h3>
      <p>
        If you are unhappy with any aspect of our service, please contact us via
        telephone or Live Chat. Our trained operators will assist with most
        queries. If the issue is unresolved, it will be escalated to a senior
        supervisor for further review.
      </p>

      <h3>What is Proof of Funds?</h3>
      <p>
        As a licensed betting operator regulated in the UK, we are required to
        verify that the source of funds used by our customers is legitimate.
        When certain limits or thresholds are reached, we may request evidence
        to confirm the sources of funds.
      </p>

      <h3>How will the information be used?</h3>
      <p>
        Any information provided will be treated with the utmost
        confidentiality. It will only be used to ensure that the money used for
        transactions originates from legitimate sources, allowing us to fulfill
        our regulatory obligations.
      </p>
    </Row>
  );

  const FeedBack = (
    <Row style={{ color: "white", fontFamily: "Popins" }} justify={"center"}>
      <h1>Give us Feedback</h1>
      <p>
        All of us at Polo.Game want to ensure you have the best possible
        experience whilst using our site. If you have any comments, please feel
        free to get in touch customerservice@polo.game
      </p>
    </Row>
  );

  const Terms = (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]} justify={"center"}>
        <Col span={12}>
          <h3>Terms & Conditions</h3>
        </Col>

        <Col span={24}>
          <p style={sectionStyle}>
            These Terms are the terms on which the Polo.Game.bet Website (which
            is owned, operated, and managed by Own Based), the Products, and
            your Account is made available to you, the Customer by Polo.Game.
          </p>
        </Col>

        <Col span={24}>
          <p style={sectionStyle}>
            Our Terms And Conditions govern all bets placed at Polo.Game, either
            electronically or via the telephone. They are periodically updated
            which is reflected in any change to the version number and date at
            the top of this document.
          </p>
        </Col>

        <Col span={24}>
          <h3 style={titleStyle}>A) INTRODUCTION AND ABOUT US</h3>
          <p style={sectionStyle}>
            1. By opening an account, you will be deemed to have read and
            accepted Our Terms And Conditions, Our Betting Rules, and Our
            Privacy Policy which constitute a legally binding agreement between
            Polo.Game and you.
          </p>
          <p style={sectionStyle}>
            2. Polo.Game is established in and operates from the UK and is fully
            licensed to operate from the UK under Gambling Commission license
            number Polo.Game-050422-R-327867-007.
          </p>
          <p style={sectionStyle}>
            3. Polo.Game is committed to providing an excellent customer
            experience. As part of that commitment, we are committed to
            supporting responsible gambling.
          </p>
          <p>
            4. All major changes to Our Terms And Conditions, Our Betting Rules
            or Our Privacy Policy will be notied to you in advance of such
            changes taking effect. If any change(s) is unacceptable to you, you
            should cease using the website and/or close your account. If,
            however, you continue to use the website after the date on which the
            changes to the relevant document comes into effect, you will be
            deemed to have accepted those changes.{" "}
          </p>
          <p>
            5.Polo.Game is a company dedicated to bringing the best possible
            service. Polo.Game aims to deliver a rst class betting service
            combined with excellent customer service.
          </p>

          <p>
            6. We may need to change the Terms from time to time for a number of
            reasons (including to comply with applicable laws and regulations,
            and regulatory requirements). Any minor or insubstantial changes may
            be made at any time and you are advised to review the Terms on a
            regular basis. The most up to date Terms will be available on the
            Website. All major changes will be notied to you in advance of such
            changes taking effect. If any change is unacceptable to you, you
            should cease using the Website and/or close your account. If,
            however, you continue to use the Website after the date on which the
            changes to the Terms come into effect, you will be deemed to have
            accepted those changes.
          </p>

          <p>
            7. As you are aware, the right to access and/or use the Website
            (including any or all of the products offered via the Website) may
            be illegal in certain countries (including, for example, the USA).
            You are responsible for determining whether you’re accessing and/or
            use of the Website is compliant with applicable laws in your
            jurisdiction and you warrant to us that gambling is not illegal in
            the territory where you reside.
          </p>

          <p>
            8. Polo.Game is committed to providing excellent customer service.
            As part of that commitment, Polo.Game is committed to supporting
            responsible gambling. For further details, please click here.
            Although Polo.Game will use its reasonable endeavours to enforce its
            responsible gambling policies, Polo.Game does not accept any
            responsibility or liability if you nevertheless continue gambling
            and/or seek to use the Website with the intention of deliberately
            avoiding the relevant measures in place and/or Polo.Game is unable
            to enforce its measures/policies for reasons outside of Polo.Game’
            reasonable control.
          </p>
          <p>
            9. Our contact details are as follows: E-mail:
            customerservice@Polo.Game
          </p>
        </Col>

        <Col span={24}>
          <h3 style={titleStyle}>B) YOUR ACCOUNT</h3>
          <p style={sectionStyle}>
            10. Accounts are only available to persons aged 18 years or over.
            Placing bets by anyone under the age of 18 is prohibited and
            Polo.Game reserves the right to void any transactions with any such
            person.
          </p>
          <p style={sectionStyle}>
            11. By accepting the Terms and Conditions and/or registering to use
            the website you agree that we shall be entitled to conduct any and
            all such identification, credit, and other verification checks from
            time to time that we may require.
          </p>
          <p>
            12. If, after completion of our KYC (Know Your Customer) verication,
            we are unable to verify your details or you are ultimately shown to
            be underage or unable and/or unwilling to provide proof of your
            residential address, or other information required to verify your
            identity, we will within a reasonable time: return any residual
            balance, up to the value of your initial deposits, at the time of
            the unsuccessful verication however; any excess winnings will not be
            credited.
          </p>
          <p>
            13. As part of the registration process, we may supply your
            information details to authorised credit reference agencies to conrm
            your identity and payment card details. You agree that we may
            process such information in connection with your registration.
          </p>
          <p>
            14. Customers may open only one account. Should we identify any
            customer with more than one account Polo.Game reserves the right to
            close any duplicate account immediately on discovery and without
            prior notice to the Customer and in such circumstances Polo.Game
            will void all bonuses, free bets and winnings accrued using the
            duplicate account, which shall be forfeited by the Customer, and
            will return all funds deposited by the Customer into the duplicate
            account using the payment method used to deposit the funds in the
            rst instance
          </p>
          <p>
            15. In order for us to complete account requests from customers
            inside or outside of the UK we may require two forms of
            identication. The ID required is as follows: (i) A copy of your
            current Debit Card Statement, containing the card number along with
            your name and address, plus a copy of the front and back of the
            relevant card. (Please note that for ‘virtual’ debit cards we
            require a copy of the online statement plus a utility bill with name
            and address that you have registered on the website). (ii) Either a
            copy of your driving licence OR a copy of your passport. This
            information can either be emailed to compliance@Polo.Game
          </p>
          <p>
            16. Account holders are responsible for all bets placed on their
            account where the correct password has been provided. Therefore, it
            is in the account holder’s interest that under no circumstances
            should any of their account details be divulged to a third party. If
            an account holder has reason to believe that a third party may be in
            possession of their password or account details, the account holder
            is responsible for contacting us to change their password.
          </p>
          <p>
            17. It is also the responsibility of the account holder to ensure
            that the debit card issuer does allow the card to be used for
            gambling purposes. Polo.Game cannot accept responsibility for any
            action taken by a card issuer against an account holder.
          </p>
          <p>
            18. Customers must keep their registration and account details up to
            date. This, and your account information, may be amended in the My
            Account section of the website. If you require any assistance,
            please Contact Us.
          </p>
          <p>
            19. We will comply with applicable data protection laws (including,
            in the UK, the Data Protection Act 1998) in respect of the personal
            information you supply to us. Your personal information is processed
            in accordance with our Privacy Policy
          </p>
          <p>
            20. If you want to close your account, please Contact Us and we will
            assist in your request.
          </p>
          <p>
            21. We will comply with applicable data protection laws (the Data
            Protection Act) in respect of the personal information you supply to
            us. Your personal information is processed in accordance with Our
            Privacy Policy
          </p>
          <p>
            22. Polo.Game reserves the right to close or suspend your account at
            any time and for any reason. This may include: (a) you become
            bankrupt. (b) Polo.Game considers that you have used the website in
            a fraudulent manner or for illegal and/or unlawful or improper
            purposes. (c) Polo.Game considers that you have used the website in
            an unfair manner, have deliberately cheated or taken unfair
            advantage of Polo.Game or any of its customers or if your account is
            being used for the benet of a third party. (d) Polo.Game is
            requested to do so by the police, any regulatory authority or court.
          </p>
        </Col>

        <Col span={24}>
          <h3 style={titleStyle}>C) YOUR FINANCES</h3>
          <p>
            23. You may only bet/wager with the amount of cleared funds held in
            your account. Accordingly, if you want to place bets or participate
            in gaming, you must deposit monies into your account. Further
            details of how to deposit, withdraw and transfer funds can be found
            at the My Account section of the website.
          </p>
          <p>
            24. By depositing funds into your Polo.Game account, you direct us
            and we agree to hold them, along with any winnings, for the sole and
            specic purpose of using them (i) to place your sporting and gaming
            stakes; and (ii) settling any fees or charges that you might incur
            in connection with the use of our services. We shall be entitled to
            suspend or close your account if we reasonably consider or have
            reason to believe that you are depositing funds without any
            intention to place sporting and/or gaming stakes. In such
            circumstances we may also report this to relevant authorities.
          </p>
          <p>
            25. Polo.Game will take no additional charges from your payments
            card for using our services, however some debit card providers may
            treat your deposit transaction with Polo.Game as a cash withdrawal
            and charge you accordingly within their terms and conditions.
            Polo.Game accept no liability for any payment card charges you may
            incur.
          </p>
          <p>
            26. To ensure absolute security of all customers nancial details and
            to assist us combat fraud efciently, it may be necessary for us to
            request customers to provide personal identication for a withdrawal
            request when funds have been deposited by a payment card.
          </p>
          <p>
            27. If you have not placed a bet using your account for a period of
            365 days your account shall be deemed to be dormant. Similarly, if
            we have frozen your account for such a period it shall also be
            considered dormant. If your account is categorised as dormant and
            there is a credit balance on the account, then we will use all
            reasonable endeavours to contact you to determine your wishes in
            respect of those unutilised funds. If you have not placed a bet or
            withdrawn the funds 14 days after this contact is made, then any
            funds will be removed.
          </p>
          <p>
            28. We are required by our licence to inform customers about what
            happens to funds which we hold on account for you, and the extent to
            which funds are protected in the event of our insolvency.We hold
            customer funds separate from company funds in [a mixture of bank
            accounts/investment accounts/in reserve funds which we hold with our
            payment processors]. These funds are not protected in the event of
            insolvency. This meets the Gambling Commission’s requirements for
            the segregation of customer funds at the level: Not Protected.
          </p>
          <p>
            29. Where possible, all withdrawals will be processed to the payment
            account from which the deposits were made. Withdrawal payments can
            only be made in the name of and to the registered account holder.
          </p>
          <p>
            30. For most payment types, withdrawals can be processed by clicking
            'Withdraw' on the My Account part of the website, subject to there
            being sufcient funds in your betting account.
          </p>
          <p>
            31. If we incur any charge-backs, reversals or other charges in
            respect of your account, we reserve the right to charge you for the
            relevant amounts incurred.
          </p>
          <p>
            32. You are responsible for reporting your winnings and losses to
            the tax and/or other authorities in your jurisdiction.
          </p>
          <p>
            33. Once a currency is selected, funds are deposited, wagered and
            winnings paid in that currency. If you wish to change the currency
            used, please Contact Us
          </p>
          <p>
            34. If the value of a deposit is not played through in full before a
            withdrawal is requested, Polo.Game reserves the right to make a
            charge to the customer’s account to cover all reasonable costs
            relating to both the deposit and withdrawal. If necessary, the value
            of the withdrawal requested may be reduced accordingly.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>D) YOUR BETS</h3>
          <p>
            35. All bets placed with Polo.Game will be settled in accordance
            with Our Betting Rules.
          </p>
          <p>
            36. Polo.Game reserves the right to decline all, or part, of any
            bet/wager requested at its sole and absolute discretion. All
            bets/wagers are placed at your own risk and discretion.
          </p>
          <p>
            37. We only accept bets/wagers made online (including via mobile
            device or downloadable applications on a mobile device) or by
            telephone. Bets/wagers are not accepted in any other form (post,
            email, fax, etc.) and where received will be invalid and void - win
            or lose.
          </p>
          <p>
            38. Bets/wagers will not be valid if there are insufcient funds in
            your account.
          </p>
          <p>
            39. A bet/wager that you request will only be valid once accepted by
            the Polo.Game servers. Each valid bet/wager will receive a unique
            transaction code. We shall not be liable for the settlement of any
            bets/wagers which are not issued with a unique transaction code. If
            you are unsure about the validity of a bet/wager, please check your
            account history, or Contact Us.
          </p>
          <p>
            40. Polo.Game reserves the right to adjust customer accounts to
            reect any incorrectly transferred monies relating to incorrect
            settlement of bets.
          </p>
          <p>
            41. Bets placed in accordance with the rules of Polo.Game may only
            be amended or cancelled by mutual agreement. However, should a bet
            be accepted in error after the result of the race / event is known
            or after Polo.Game has ceased to accept bets on the race / event
            concerned, the selection(s) involved will be void.
          </p>
          <p>
            42. Polo.Game reserves the right to refuse the whole or part of any
            bet. The right is also reserved to close an account without
            explanation, however in such case any bets already accepted and
            awaiting fruition will stand, unless made in contravention of our
            rules or otherwise fraudulently.
          </p>
          <p>
            43. Access to, or betting with Polo.Game may be illegal for persons
            in certain countries and Polo.Game does not intend that their
            service is used for betting by such persons. It is the
            responsibility of each account holder to ensure that they comply
            with any laws applicable to betting in the location from where a bet
            is placed. Polo.Game cannot be held responsible for any action
            resulting from the use of their service in jurisdictions where
            betting may be illegal.
          </p>
          <p>
            44. It is a condition of our acceptance of bets from you that, and
            by offering to place a bet with us you represent that: (a) you are
            not prohibited from entering into the bet by any term of your
            contract of employment or any rule of a Sport Governing Body which
            applies to you. (b) you are not aware of any circumstances which
            would make the placing of the bet a breach of a rule on betting
            applied by a Sport Governing Body. (c) where the bet is placed on
            the outcome of a race, competition or other event or process or on
            the likelihood of anything occurring or not occurring (“the event”)
            you do not know the outcome of the event. (d) In the event of such
            representation by you proving to be false your stake will be
            forfeited and we shall not be obliged to pay any winnings which
            might otherwise have been payable in respect of the bet.
          </p>
          <p>
            45. Related contingency betting is not permitted. This is typically
            multiple bets which combine different selections within the same
            event are not accepted where the outcome of one affects or is
            affected by the other. For example, in a soccer match involving
            Chelsea and Man U: If Chelsea are 'evens' to win at home to Man U
            and the correct score odds for Chelsea to win 1-0 is 8-1, by having
            the double Chelsea to win and the correct score to be 1-0, a
            customer would be getting 17-1 about an 8-1 chance, for if Chelsea
            win 1-0 they would automatically have won the match. If such a bet
            is taken in error it will be settled as two single bets with the
            stake equally divided.
          </p>
          <p>
            46. Where selections dead-heat, the stake money is proportioned
            according to the number of selections which dead-heat and paid at
            full-odds.
          </p>
          <p>
            47. Outright markets (dened as after the draw/ofcial eld is conrmed
            for a specic event), may be subject to a deduction equivalent to the
            Rule 4 (Deductions). The Rule 4 will be applied, according to the
            table of deductions (a table of deductions, and further Rule 4 rules
            related to Horse Racing can be found within the Horse Racing section
            of Our Betting Rules CLICK HERE); with the exception that a Rule 4
            of 5 pence will not be enforced. Effectively the Rule 4 will be
            applied, in the case of participant withdrawals, with odds of 9/1 or
            smaller. Deductions may apply for any runners scratched from the
            Final Field prior to race commencement. Any such deductions will
            apply to the total payout value on all bets placed prior to the
            scratching and the reframing of a new market by Polo.Game.
          </p>
          <p>
            48. Polo.Game will not be liable for obvious/palpable errors. This
            includes bets where an obvious error is subsequently identied in the
            odds/handicap/totals/Cash Out amounts displayed or where Polo.Game
            continue to accept bets or wagers on a closed or suspended markets.
            This extends to settlement errors on bets or Cash Outs. In the event
            of an incorrect price being taken prior to the start of an event any
            bets will stand and be settled at the Polo.Game revised price. If
            the revised price is deemed less than 1/1000 then bets will be void.
            Where there is sufcient time before the start of an event, Polo.Game
            will endeavour to contact the customer and may in our absolute
            discretion allow the option of cancelling the bet. When an incorrect
            player or team is quoted within a xture all bets will be void at the
            discretion of Polo.Game. If, for any reason, a pre-event bet is
            inadvertently accepted after a match or event has commenced, bets
            will be settled as follows: If the event and market is covered
            In-Play then bets will stand at the revised price at the time the
            bet was placed (where a revised price is deemed less than 1/1000
            then bets will be void), unless the outcome is already known in
            which case such bets will be void. ii) If the event or market is not
            covered In-Play then the bet will stand as long as the selected
            participant or team has not gained a material advantage (e.g. a
            score, sending off for the other team etc). Where a material
            advantage has been gained Polo.Game reserve the right to void the
            bet, win or lose. Any bet placed where the outcome is already known,
            including In-Play, will be made void.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>E) USE OF WEBSITE </h3>
          <p>
            49. Please read the Our Terms and Conditions, Our Betting Rules and
            Our Privacy Policy carefully and if you do not accept any part of
            them, do not use the website.
          </p>
          <p>
            50. Where you play any game, or place a bet or wager, using the
            website, you accept and agree to be bound by, the Rules which apply
            to the applicable products available on the website from time to
            time. The Rules can be found under the info tab of the applicable
            section of the website.
          </p>
          <p>
            51. The current balance and transaction history of your account can
            be viewed at any time once you have logged into your account.
          </p>
          <p>
            52. Polo.Game actively monitors trafc to and from the website. We
            reserve the right in our sole discretion to block access where
            evidence indicative of automated or robotic activity is found.
          </p>
          <p>
            53. Polo.Game reserves the right to restrict access to all or
            certain parts of the website in respect of certain jurisdictions.
          </p>
          <p>
            54. Polo.Game may alter or amend the products offered via the
            website at any time and for any reason.
          </p>
          <p>
            55. From time to time, all or part of the website may be unavailable
            for use by you because of our maintenance of the website and/or
            alteration or amendment of any of the website products.
          </p>
          <p>
            56. Where our Website contains links to other websites and resources
            provided by third parties, these links are provided for your
            information only. We have no control over the contents of these
            sites or resources, and accept no responsibility for them or for any
            loss or damage that may arise from your use of them or their use of
            any information they may acquire about you (including personal
            data).
          </p>
          <p>
            57. A link from our Website does not constitute an endorsement by us
            of the use of that link, the company or organisation behind that
            link or the contents of the website reached using that link.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>F) USE OF TELEPHONE BETTING</h3>
          <p>
            58. For bets placed by telephone, you are responsible for all
            transactions where your name and account number or name and username
            are correctly quoted (whether or not authorised by you). If you
            nominate another person as an authorised user of your account, you
            shall be responsible for all transactions such person makes using
            the relevant account details. Should you lose your account details
            or feel that someone else may have your account details, please
            Contact Us.
          </p>
          <p>
            59. For telephone bets/wagers 'acceptance conrmed' will be deemed
            only after an operator has completed a full read back of the
            bet/wager details and conrmed to the customer that the bet/wager has
            been successfully processed and accepted.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>G) OUR LIABILITY</h3>
          <p>
            60. You shall indemnify and hold harmless Polo.Game, its
            subsidiaries, employees and agents and partners from any claims,
            liabilities, costs and expenses that may arise as a result of your
            breach of these terms and conditions or a breach of any laws of any
            jurisdiction applicable to you. In the event of such breach your
            winnings may be forfeited and Polo.Game may retain any positive
            balance then existing on your account pending investigation and/or
            the conclusion of any legal proceedings.
          </p>
          <p>
            61. Despite every effort to ensure complete accuracy, Polo.Game
            cannot be held responsible for any errors in the information
            provided over the phone or online. In the event of incorrect odds
            being quoted, bets will be settled at the correct price. In such
            cases Polo.Game will endeavour to contact the account holder, by
            writing to their registered e-mail address, prior to the race /
            event, to offer the option of the bet being declared void. Should a
            response not be forthcoming, the bet will stand at the correct odds.
          </p>
          <p>
            62. Polo.Game shall not be held responsible for the accuracy of
            betting statistics, in-play data and editorial content whether
            supplied directly by us or via a third party.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>H) OUR INTELLECTUAL PROPERTY RIGHTS</h3>
          <p>
            63. Ownership of any intellectual property rights in the website
            including, without limitation, the software, images and text (the
            “IPR Rights”) remain with either Polo.Game or its licensors. You are
            permitted to use this material only as expressly authorised by us or
            our licensors. You shall not copy, redistribute, publish, reproduce,
            transmit, display, commercially exploit, tamper with or create
            derivative works of any of the IPR Rights in whole or in part and
            you shall not interfere with, modify, or reverse engineer any
            software provided on the website. I) PROMOTIONS
          </p>
          <p>
            64. When promotional offers are made, additional, specic rules may
            apply which we will clearly display. Free bet stakes will not be
            returned as part of any winnings.
          </p>
          <p>
            65. We reserve the right to withdraw any promotional offer at our
            discretion and without prior warning.
          </p>
          <p>
            66. All customer offers are limited to one per person, family,
            household address, email address, telephone number, same payment
            account number (e.g. debit card), linked NETeller or Skrill
            accounts, mobile device (e.g. mobile or tablet), application
            download or shared computer (e.g. public library or workplace).
          </p>
          <p>
            67. Where any term of the offer or promotion is breached or there is
            any evidence of a series of bets/wagers placed by a customer or
            group of customers (e.g. where common betting patterns across the
            same xture/markets have been identied across accounts), which due to
            a deposit bonus, enhanced payments, free and risk free bets/wagers,
            or any other promotional offer results in guaranteed customer prots
            irrespective of the outcome, whether individually or as part of a
            group, Polo.Game reserves the right to reclaim the bonus element of
            such offers and in Polo.Game absolute discretion settle bets/wagers
            at the correct odds, void the free and risk free bets/wagers or void
            any bet/wager funded by the deposit bonus.
          </p>
        </Col>

        <Col span={24}>
          <h3 style={titleStyle}>
            J) COMPLAINTS, DISPUTES, GOVERNING LAW and JURISDICTIONS
          </h3>
          <p>
            68. Enquiries relating to any aspect of Polo.Game should be directed
            to customerservice@Polo.Game
          </p>
          <p>
            69. In the event of a dispute not being resolved following contact
            with our customer service team, the account holder may refer the
            matter to the Polo.Game Senior Supervisor. Should the dispute
            continue to remain unresolved, the matter may then be referred to
            the Independent Betting Arbitration Service or any other mutually
            agreed and recognised body for arbitration, where providing each
            party has been given the opportunity of submitting their case, any
            decision shall be binding on both parties.
          </p>
          <p>
            70. If any part of these terms and conditions is deemed unlawful,
            void or for any reason unenforceable, then that part shall be deemed
            to be severable from the rest of these terms and conditions and
            shall not affect the validity and enforceability of the remaining
            provisions of these terms and conditions.
          </p>
          <p>
            71. You acknowledge and agree that the material and content
            contained within the Polo.Game website and provided as part of the
            Polo.Game betting service is made available for your personal
            non-commercial use only. Any other use of such material and content
            is strictly prohibited. You may download one copy of the material on
            this website for such use onto a single computer. Your use of the
            service is at your sole risk.
          </p>
          <p>
            72. Should a dispute arise, you and Polo.Game agree that the
            Polo.Game transaction log database will be the ultimate authority in
            such matters.
          </p>
          <p>
            73. Polo.Game accepts no liability under the law in any jurisdiction
            other than the UK. All bets made with us, together with Our Terms
            And Conditions and Our Betting Rules, are governed by English law
            and the courts of England and Wales shall have exclusive
            jurisdiction to settle any disputes that arise out of or in relation
            to them.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>K) IT Failures</h3>
          <p>
            74. We cannot be held responsible for a bet not being placed or an
            offer not being matched for any reason or you being disconnected
            from the Website, including but not limited to computer malfunctions
            and failure of telecommunications services or internet connections.
            The balance of your account will at all times be as is recorded on
            our server.
          </p>
          <p>
            75. The balance on the server when logging on to our Website, after
            you have been disconnected, will reect the balance after completion
            of the last bet prior to the disconnection.
          </p>
          <p>
            76. We regret the imposition of the above, however it is necessary
            to avoid further complications. By placing any further bets or
            offers on our Website, you accept the results of any previous bet.
            As such (at our discretion) the results of the previous bet are no
            longer in dispute and no refund or other adjustments will be
            granted. If you feel the result of any of the games is unfair or
            incorrect, you should contact us immediately and report the
            incident.
          </p>
        </Col>

        <Col span={24}>
          <h3 style={titleStyle}>L) Downloads</h3>
          <p>
            77) For certain of our betting products and services offered through
            our Website you may need to download software in order to use them
            and we will licence the software to you (or sub-license to you, to
            the extent the software is owned by a third party). The terms upon
            which you may download and use any such software will be made
            available to you at the time of download and must be accepted by you
            prior to your use of that software.
          </p>
          <p>
            78) Downloads may involve placing les and installation software on
            the hard drive of your computer. Convenient locations for storing
            the software may be suggested during the download and installation
            procedure but it is your responsibility to store the software in
            accordance with the exact nature and set-up of your individual
            computer. We shall not be responsible for incorrect storage of the
            software in les/folders where it may interfere with the start up,
            running and third party software procedures of your computer.
          </p>
          <p>
            79) You shall not: i) interfere with, modify or reverse engineer any
            software provided to you by us and/or any third party, except as
            permitted by law; or ii) copy or use any software, without our or
            the third party software providers written consent.
          </p>
          <p>
            80) Any material downloaded or otherwise obtained through the use of
            our Website is done at your own discretion and risk.
          </p>
          <p>
            81) You will be solely responsible for any damage to your computer
            system or for any loss of data that results from the download of any
            such material.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>M) MAXIMUM PAYOUTS</h3>
          <p>
            Customers should note that multiple bets can be placed that exceed
            the limits stated, Polo.Game accept no liability for accepting bets
            that breach the limits below and will not void them, it is the
            Customers’ responsibility to ensure that they are aware of the
            maximum pay-out applicable to the Sports product they bet on. Where
            a multiple bet has been placed which involves events with different
            pay-out limits then the lowest limit will apply.
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>FOOTBALL:</h3>
          <p>
            All Men’s full International matches including World Cup Finals and
            qualiers & UEFA European Championship and qualiers. English
            Premiership, Championship, League 1, League 2, FA Cup (3rd rnd
            onwards), Spanish La Liga, Italian Serie A, German Bundesliga I,
            French Le Championnat, UEFA Champions League (Group stages onwards)
            and UEFA Europa League (Group stages onwards). OTHER SPORTS:
            <ul>
              <li>Athletics</li>
              <li>Australian Rules Football</li>
              <li>Badminton</li>
              <li>Beach Volleyball</li>
              <li>Bowls</li>
              <li>Cycling</li>
              <li>Floor Ball</li>
              <li>Futsal</li>
              <li>Gaelic Football</li>
              <li>Handball</li>
              <li>Hockey</li>
              <li>Hurling</li>
              <li>Indian Premier League Tennis</li>
              <li>ITF and Challenger level tennis</li>
              <li>Motorcycling</li>
              <li>Nine Ball Pool</li>
              <li>MMA / UFC</li>
              <li>NASCAR</li>
              <li>Netball</li>
              <li>Olympic/Commonwealth Games (All Events)</li>
              <li>Rugby 7’s</li>
              <li>Speedway</li>
              <li>Squash</li>
              <li>Swimming</li>
              <li>Table Tennis</li>
              <li>Volleyball</li>
              <li>Water Polo</li>
              <li>Winter Sports</li>
            </ul>
          </p>
        </Col>
        <Col span={24}>
          <h3 style={titleStyle}>CASINO</h3>
          <h3 style={titleStyle}>Maximum Win Limits</h3>
          <p>
            In relation to each of Casino, Live Casino, Bingo or Virtual Sports:
            other than progressive jackpot slots, selected live table games or
            where specically advertised for a particular game or promotion, the
            maximum winnings for any one wager or gameplay transaction shall be
            no greater than 100 Rs. or the equivalent amount in your chosen
            currency. Maximum winnings limits apply to all of our casino
            services, as stated above, and these limits apply regardless of
            stake. If a technical problem causes a game/feature/promotion to pay
            out (or a display issue causes wrong result to be displayed) a
            higher amount than should be paid (a game win, bonus game win,
            jackpot win etc) to a player's account, we reserve the right to
            remove all funds (or not pay the incorrectly displayed amount) from
            accounts that are incorrectly credited as well as any winnings
            subsequently won by using the incorrectly credited funds If we
            detect a Player has or is abusing a technical glitch related to the
            games/software, either on his own or in association with partners,
            we reserve the right to void any winnings and close the relevant
            player/s accounts. In the event of a system malfunction all wagers
            shall be void. In the event a game is started but malfunctions
            because of a failure of the system, we shall refund the amount
            wagered in the game to you by crediting it to your account balance
            or, if the account no longer exists, by paying it to you in an
            approved manner. In cases where your participation in a game (after
            you have made a wager) is interrupted, preventing you from
            continuing your game, either because of a telecommunication system
            failure or a failure of your personal computer system, we shall take
            all reasonable steps to ensure that our system will enable
            continuation of the game that was interrupted at the time
            immediately before the interruption occurred. If our system does not
            enable you to continue, after the restoration of the system, with a
            game interrupted by a failure of the telecommunications system or
            your computer system, we shall: a) ensure that the game is
            terminated; and b) refund the amount of the wager to you by placing
            it in your account. In the event that you are disconnected from a
            bingo game, having purchased tickets to participate in the game, the
            game will continue to play out to completion and, if applicable,
            your account will be credited from any winnings from the game upon
            reconnection.
          </p>
        </Col>

        <Col span={24}>
          <p style={sectionStyle}>
            Please note it is the account holder’s responsibility to be fully
            aware of the current Polo.Game Rules and Terms & Conditions before
            placing a bet and once a bet has been placed it will be deemed that
            the Polo.Game Rules and Terms & Conditions have been accepted by the
            account holder.
          </p>
          <p style={sectionStyle}>LATEST CHANGE OF RULES: 18 Jan 2025</p>
        </Col>
      </Row>
    </div>
  );

  const AboutUs = (
    <Row justify="center" style={{ color: "white", fontFamily: "Popins" }}>
      <h1>Welcome to Polo.Game</h1>
      <p>
        Your ultimate destination for an exhilarating and secure online betting
        experience! At Polo.Game, we bring together the best in sports betting,
        innovative technology, and a user-friendly interface to provide an
        unparalleled gaming environment. Whether you're a seasoned bettor or a
        first-time player, our platform offers a variety of exciting betting
        options across numerous sports and events.
      </p>
      <p>
        We prioritize transparency, fairness, and security, ensuring that every
        wager you place is met with the highest standards of reliability. At
        Polo.Game, we believe in bringing the excitement of betting to you with
        a touch of class and reliability. Established in 2016, we are a UK-based
        betting website dedicated to providing a top-tier betting experience for
        all our customers. Whether you're a seasoned bettor or just starting, we
        have something for everyone.
      </p>

      <h3 style={AboutUsStyle}>Our Mission</h3>
      <p>
        Our mission is simple: to offer a safe, fair, and exhilarating betting
        environment. We strive to enhance your betting experience with an
        intuitive platform, extensive market options, and exceptional customer
        service.
      </p>

      <h3 style={AboutUsStyle}>What We Offer</h3>
      <ul>
        <li>
          <strong>Comprehensive Betting Markets:</strong> Polo.Game covers a
          wide range of sports and events from football and horse racing to
          casinos and beyond. We offer competitive odds and numerous betting
          options to suit all preferences.
        </li>
        <li>
          <strong>Live Betting:</strong> Enjoy the thrill of in-play betting
          with real-time updates and live odds. Our live betting platform
          ensures you never miss a moment of the action.
        </li>
        <li>
          <strong>Casino Games:</strong> For those who enjoy various games, our
          online casino features multiple slots, table games, and live dealer
          experiences. It's the perfect place to unwind and enjoy some leisure
          time.
        </li>
        <li>
          <strong>Promotions and Bonuses:</strong> We reward our customers with
          generous promotions and bonuses. From welcome offers to loyalty
          rewards, there's always something to boost your betting experience at
          Polo.Game.
        </li>
      </ul>

      <h3 style={AboutUsStyle}>Safety and Security</h3>
      <p>
        Your security is our top priority. Polo.Game operates under a strict
        regulatory framework set by the UK Gambling Commission, ensuring a fair
        and transparent betting environment.
      </p>

      <h3 style={AboutUsStyle}>Responsible Gambling</h3>
      <p>
        At Polo.Game, we promote responsible gambling. We provide tools and
        resources to help you stay in control, including self-exclusion options,
        deposit limits, and access to support organisations. Your well-being is
        important to us, and we are committed to providing a safe and enjoyable
        betting experience.
      </p>

      <h3 style={AboutUsStyle}>Customer Support</h3>
      <p>
        Our dedicated customer support team is available 24/7. Whether you have
        a question about your account, need help with a bet, or require
        technical assistance, we're just a click or a call away.
      </p>
    </Row>
  );

  const Betting = (
    <Row justify={"center"}  style={{color:"white" , fontFamily:"Popins"}}>
      <h1>General Sports Betting Rules</h1>

      <section>
        <h2>Abandoned Matches and Changes to Scheduled Play</h2>
        <p>
          In the case of abandoned matches, or matches where the original scheduled amount of play is changed (e.g., a reduction in the number of overs in a cricket match), except where specifically stated otherwise, bets will be settled on the current result if further play could not affect that result. For example, if a football match has been abandoned but the number of corners has already exceeded the maximum number specified, then further play could not affect that result.
        </p>
      </section>

      <section>
        <h2>Multiple Bets</h2>
        <p>
          Any multiple bet reduced by a void, abandoned, or postponed match will stand for the remaining selections, irrespective of the minimum number of selections required.
        </p>
      </section>

      <section>
        <h2>Place Terms</h2>
        <p>
          Place terms on sports betting are those that were relevant at the time that the bet was placed. If you place an each-way bet and are uncertain about the current place terms, confirm them at the time. Place terms on horse and greyhound racing, with the exception of ante-post, are those that were relevant at the start of the race.
        </p>
      </section>

      <section>
        <h2>Changes in Scheduled Sets or Legs</h2>
        <p>
          In the event that the number of scheduled sets/legs to be played is changed (e.g., a match originally scheduled for five sets is reduced to three), match bets will stand, but set betting will be void.
        </p>
      </section>

      <section>
        <h2>Ties, Draws, and Dead Heats</h2>
        <p>
          Unless specifically stated otherwise, bets on any two-runner market that ends in a tie, draw, or exact number of points quoted, where no price was offered for that outcome, will be void and stakes returned. Dead heat rules apply for markets with three or more runners unless stated otherwise.
        </p>
      </section>

      <section>
        <h2>Abandoned or Postponed Matches</h2>
        <p>
          With the exception of ante-post markets, unless stated otherwise, bets on abandoned or postponed matches or races will be void unless rescheduled for the next day. Bets on postponed events or tournaments will stand for one full week from the original start date, after which they will be void.
        </p>
      </section>

      <section>
        <h2>Set, Frame, and Leg Markets</h2>
        <p>
          The full number of sets, frames, or legs required to win must be achieved. If the match is awarded before this is achieved, then set/frame/leg betting will be void.
        </p>
      </section>

      <section>
        <h2>Handicaps</h2>
        <p>
          The handicap is added to the team after the final result.
        </p>
      </section>

      <section>
        <h2>Change of Opponent</h2>
        <p>
          In the event of a change of opponent, all bets are void.
        </p>
      </section>

      <section>
        <h2>Betting Suspension and Ambiguities</h2>
        <p>
          We reserve the right to refuse or void ambiguous bets and to suspend betting on a market at any time without notice.
        </p>
      </section>

      <section>
        <h2>In-Play Betting</h2>
        <p>
          If a match is not completed, all bets will be void unless further play could not affect the result.
        </p>
      </section>

      <section>
        <h2>Errors and Corrections</h2>
        <p>
          Polo.Game strives to avoid errors in prices, handicaps, lines, or terms. However, if an error occurs, bets will be settled at the correct terms. If settlement has occurred, adjustments will be made to the account. Erroneous bets indicating unachievable results will be void.
        </p>
      </section>

      <section>
        <h2>Bets on Ongoing Events</h2>
        <p>
          Bets placed on events that have already started will be void unless In-Play betting is offered. If no significant action has occurred, bets may stand.
        </p>
      </section>

      <section>
        <h2>Polo.Game Rights</h2>
        <ul>
          <li>Polo.Game reserves the right to void bets placed after the event outcome is known or after significant events affecting the chances of winning.</li>
          <li>Polo.Game reserves the right to recover any overpaid returns, including Cash Out payments.</li>
        </ul>
      </section>

    </Row>
  );

  const Privacy = (
    <Row justify={"center"} style={{ fontFamily: "Popins" }}>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy ("Policy") (together with our Terms and Conditions
        and any other documents referred to on it) sets out the basis on which
        any Information we collect from you, or that you provide to us, will be
        processed by us to enable us to manage your relationship with Polo.Game.
        By submitting your Information to us and/or using Polo.Game services,
        you confirm your consent to the use of your Information as set out in
        this Policy.
      </p>
      <h2>Purpose</h2>
      <p>
        The purpose of this privacy policy is to give you a broader
        understanding of:
      </p>
      <ul>
        <li>What information we collect</li>
        <li>How we use that information</li>
        <li>How this information is shared</li>
        <li>Your rights</li>
        <li>Other useful privacy and security-related matters</li>
      </ul>
      <h2>Information Collection</h2>
      <p>
        Polo.Game may collect and process the following Information about you:
      </p>
      <ul>
        <li>
          Information that you enter when registering for a Polo.Game account,
          posting material, or requesting further services.
        </li>
        <li>
          If you contact us, we may keep a record of that correspondence.
          Telephone calls to and from our Call Centre are recorded for training
          and security purposes along with the resolution of any queries arising
          from the service you receive.
        </li>
        <li>
          Details of transactions you carry out in respect of our services and
          of the fulfillment of your transactions.
        </li>
        <li>
          Details of your visits to our website (including, but not limited to,
          traffic data, location data, cookies, weblogs, IP Addresses, and other
          communication data) and any other resources that you access.
        </li>
        <li>Social Media engagement.</li>
      </ul>
      <h2>How Information is Used</h2>
      <p>
        We may use your Information together with other information for the
        purposes of:
      </p>
      <ul>
        <li>Creating and managing your accounts.</li>
        <li>Improving and personalizing the services that we offer you.</li>
        <li>Processing your transactions, wagers, and winnings.</li>
        <li>Complying with our duties under applicable law and regulations.</li>
        <li>Building personal profiles.</li>
        <li>
          Providing you with marketing information and information concerning
          promotional offers by post, email, telephone, and other means. Please
          adjust your account settings if you do not wish to receive any or all
          of these services.
        </li>
      </ul>
      {/* Add the rest of the policy similarly */}
    </Row>
  );

  const handleItemClick = (type: string) => {
    setClickedItem(type);
    setIsModalOpen(true);
  };

  const getCurrentModule = () => {
    switch (clickedItem) {
      case "FAQ":
        return FAQ;
      case "Responsible":
        return responsibleGaming;
      case "KYC":
        return KYC;
      case "About":
        return AboutUs;
      case "Terms":
        return Terms;
      case "Privacy":
        return Privacy;
      case "Betting":
        return Betting;
      case "FeedBack":
        return FeedBack;  
      default:
        return AboutUs;
    }
  };

  return (
    <>
      <div className={styles.footerWrapper}>
        {/* Title Section */}
        <Row justify="center" style={{ marginBottom: "20px" }}>
          <Typography.Title
            level={4}
            style={{ color: "#fff" }}
            onClick={() => handleItemClick("support")}
          >
            24X7 Support
          </Typography.Title>
        </Row>

        <Divider variant="dashed" className={styles.dashedStyle} />

        {/* Links Section */}
        <Row justify="center" style={{ marginBottom: "20px" }}>
          <Col xs={24} sm={24} md={16} lg={12}>
            <Space
              size="large"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                onClick={() => handleItemClick("About")}
              >
                About us
              </Typography.Link>
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("Terms")}
              >
                Terms and Conditions
              </Typography.Link>
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("Responsible")}
              >
                Responsible Gaming
              </Typography.Link>
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("FAQ")}
              >
                FAQ'S
              </Typography.Link>
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("Privacy")}
              >
                Privacy Policy
              </Typography.Link>

              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("Betting")}
              >
                Betting Rules
              </Typography.Link>
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("FeedBack")}
              >
                Give us Feedback
              </Typography.Link>
              <Typography.Link
                style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
                href="#"
                onClick={() => handleItemClick("FAQ")}
              >
                Cookie settings
              </Typography.Link>
            </Space>
          </Col>
        </Row>

        <Divider variant="dashed" className={styles.dashedStyle} />

        {/* Safety Section */}
        <Row justify="center" align="middle" style={{ marginBottom: "20px" }}>
          <Col span={24} style={{ textAlign: "center" }}>
            <CheckCircleOutlined style={{ color: "green", fontSize: "24px" }} />
            <span style={{ marginLeft: "10px", fontSize: "16px" }}>
              100% SAFE - Protected connection and encrypted data
            </span>
          </Col>
        </Row>

        <Divider variant="dashed" className={styles.dashedStyle} />

        {/* Copyright Section */}
        <Row justify="center">
          <Typography.Text style={{ color: "#fff" }}>
            © Copyright 2024. All Rights Reserved.
          </Typography.Text>
        </Row>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
        footer={""}
        style={{
          overflowY: "scroll",
          height: "70vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Card
          title={
            <Row
              justify={"center"}
              style={{
                backgroundColor: "inherit",
                marginBottom: "2vh",
                color: "white !important",
              }}
            >
              <img
                src={logo} // Replace with the actual path to your logo
                alt="Polo Games Logo"
                style={{ height: "50px" }}
              />
            </Row>
          }
          style={{ color: "white", fontFamily: "Popins" }}
        >
          {getCurrentModule()}
        </Card>
      </Modal>
    </>
  );
};

export default Footer;
