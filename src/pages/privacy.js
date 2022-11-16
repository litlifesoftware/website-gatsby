import React from "react";
import CollapsibleCard from "../components/collapsible_card";
import Layout from "../components/layout";
import Seo from "../components/seo";
import products from "../data/product_data";

/**
 * Returns a functional component.
 *
 * A page displaying `LitLifeSoftware`'s privacy policy using `CollapsibleCard`
 * components.
 *
 */
function PrivacyPage() {
  /**
   * All applications mentioned on this website.
   */
  const appNames = products.map((item, key) => item.title);

  /**
   * Creates a human-readable `string` stating the titles of all products
   * provided.
   *
   * @returns string
   */
  function displayAppList() {
    let appList = "";
    appNames.forEach((name, index) =>
      index !== appNames.length - 1
        ? (appList = appList.concat(
            ` the ${name} app ${index !== appNames.length - 2 ? "," : ""}`
          ))
        : (appList = appList.concat(` and the ${name} app`))
    );
    return appList;
  }

  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <div
        className={
          "text-gray-800 w-full bg-gradient-to-bl from-privacygradient-100 to-privacygradient-200"
        }
      >
        <div className="max-w-7xl md:w-1/2 mx-auto pt-16 pb-6 lg:pt-24 lg:pb-6 px-8 sm:px-6 lg:px-4 lg:flex">
          <h2 className="text-2xl lg:text-3xl leading-9 font-extrabold tracking-tight text-gray-600 sm:leading-10 text-left">
            Privacy Policy
          </h2>
        </div>

        <section className="px-8 text-gray-800">
          <CollapsibleCard
            initallyHidden={false}
            title="In General"
            tabIndex="0"
            body={
              <div>
                {" "}
                <p>
                  LitLifeSoftware built {displayAppList()} as{" "}
                  {appNames > 1 ? "a Free app" : "Free apps"}. This SERVICE is
                  provided by LitLifeSoftware at no cost and is intended for use
                  as is.
                </p>
                <p>
                  This page is used to inform visitors regarding my policies
                  with the collection, use, and disclosure of Personal
                  Information if anyone decided to use my Service.
                </p>
                <p>
                  If you choose to use my Service, then you agree to the
                  collection and use of information in relation to this policy.
                  The Personal Information that I collect is used for providing
                  and improving the Service. I will not use or share your
                  information with anyone except as described in this Privacy
                  Policy.
                </p>
                <p>
                  The terms used in this Privacy Policy have the same meanings
                  as in our Terms and Conditions, which is accessible at
                  {displayAppList()} unless otherwise defined in this Privacy
                  Policy.
                </p>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Information Collection and Use"
            body={
              <div>
                {" "}
                <p>
                  For a better experience, while using our Service, I may
                  require you to provide us with certain personally identifiable
                  information, including but not limited to First name, Last
                  name, IP address, Email address. The information that I
                  request will be retained on your device and is not collected
                  by me in any way.
                </p>
                <div>
                  <p>
                    The app does use third party services that may collect
                    information used to identify you.
                  </p>
                  <p>
                    Link to privacy policy of third party service providers used
                    by the app
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.google.com/policies/privacy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Play Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://firebase.google.com/policies/analytics"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Analytics for Firebase
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://firebase.google.com/support/privacy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Firebase Crashlytics
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Log Data"
            body={
              <div>
                {" "}
                <p>
                  I want to inform you that whenever you use my Service, in a
                  case of an error in the app I collect data and information
                  (through third party products) on your phone called Log Data.
                  This Log Data may include information such as your device
                  Internet Protocol (“IP”) address, device name, operating
                  system version, the configuration of the app when utilizing my
                  Service, the time and date of your use of the Service, and
                  other statistics.
                </p>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Cookies"
            body={
              <div>
                {" "}
                <p>
                  Cookies are files with a small amount of data that are
                  commonly used as anonymous unique identifiers. These are sent
                  to your browser from the websites that you visit and are
                  stored on your device's internal memory.
                </p>{" "}
                <p>
                  This Service does not use these “cookies” explicitly. However,
                  the app may use third party code and libraries that use
                  “cookies” to collect information and improve their services.
                  You have the option to either accept or refuse these cookies
                  and know when a cookie is being sent to your device. If you
                  choose to refuse our cookies, you may not be able to use some
                  portions of this Service.
                </p>{" "}
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Service Providers"
            body={
              <div>
                <p>
                  I may employ third-party companies and individuals due to the
                  following reasons:
                </p>{" "}
                <ul>
                  <li>To facilitate our Service;</li>{" "}
                  <li>To provide the Service on our behalf;</li>{" "}
                  <li>To perform Service-related services; or</li>{" "}
                  <li>To assist us in analyzing how our Service is used.</li>
                </ul>{" "}
                <p>
                  I want to inform users of this Service that these third
                  parties have access to your Personal Information. The reason
                  is to perform the tasks assigned to them on our behalf.
                  However, they are obligated not to disclose or use the
                  information for any other purpose.
                </p>{" "}
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Security"
            body={
              <div>
                {" "}
                <p>
                  I value your trust in providing us your Personal Information,
                  thus we are striving to use commercially acceptable means of
                  protecting it. But remember that no method of transmission
                  over the internet, or method of electronic storage is 100%
                  secure and reliable, and I cannot guarantee its absolute
                  security.
                </p>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Links to Other Sites"
            body={
              <div>
                {" "}
                <p>
                  This Service may contain links to other sites. If you click on
                  a third-party link, you will be directed to that site. Note
                  that these external sites are not operated by me. Therefore, I
                  strongly advise you to review the Privacy Policy of these
                  websites. I have no control over and assume no responsibility
                  for the content, privacy policies, or practices of any
                  third-party sites or services.
                </p>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Children’s Privacy"
            body={
              <div>
                <p>
                  These Services do not address anyone under the age of 13. I do
                  not knowingly collect personally identifiable information from
                  children under 13. In the case I discover that a child under
                  13 has provided me with personal information, I immediately
                  delete this from our servers. If you are a parent or guardian
                  and you are aware that your child has provided us with
                  personal information, please contact me so that I will be able
                  to do necessary actions.
                </p>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="0"
            title="Changes to This Privacy Policy"
            body={
              <div>
                {" "}
                <p>
                  I may update our Privacy Policy from time to time. Thus, you
                  are advised to review this page periodically for any changes.
                  I will notify you of any changes by posting the new Privacy
                  Policy on this page.
                </p>
                <p>This policy is effective as of 2020-04-24</p>
              </div>
            }
          />

          <CollapsibleCard
            tabIndex="00"
            title="Contact Us"
            body={
              <div>
                {" "}
                <p>
                  If you have any questions or suggestions about my Privacy
                  Policy, do not hesitate to contact me at
                  litlifesoftware@gmail.com.
                </p>
              </div>
            }
          />
        </section>

        <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:px-4 lg:py-16 lg:flex lg:items-center lg:justify-between container xl:w-1/2">
          <p>
            This privacy policy page was created at
            <a
              href="https://privacypolicytemplate.net"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              privacypolicytemplate.net{" "}
            </a>
            and modified/generated by
            <a
              href="https://app-privacy-policy-generator.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              App Privacy Policy Generator
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPage;
