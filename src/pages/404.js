import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import * as React from "react";
import IconButton from "../components/iconbutton";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 - Not found" />
    <div className="min-h-screen w-full bg-gradient-to-bl from-white to-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen w-full backdrop-blur-sm">
          <div className="text-center tracking-wide text-gray-700">
            <h1 className="font-semibold text-2xl">404 - Page Not Found</h1>
            <p className="text-lg pb-8">This page does not exist.</p>
            <Link to="/">
              <IconButton title="GO BACK" icon={faHome} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
