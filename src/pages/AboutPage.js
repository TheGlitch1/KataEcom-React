import React from "react";
import styled from "styled-components";

import { Breadcrumb, Typography } from "../components";
import { projectDetails } from "../utils/constants";
import Screen from "../styles/Screen";

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb title="About" />
      <Wrapper className="page">
        <div className="about__text">
        {projectDetails.projectDescription.map((section, index) => (
          <div key={index} className="about__section">
            <Typography.H1>{section.title}</Typography.H1>
            {section.paragraphs.map((paragraph, index) => (
              <Typography.P key={index}>{paragraph}</Typography.P>
            ))}
            {section.features && (
              <ul>
                {section.features.map((feature, index) => (
                  <Typography.P as="li" key={index}>
                    - <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                  </Typography.P>
                ))}
              </ul>
            )}
          </div>
        ))}
        </div>
        <div className="about__structure">
        <FileStructure>
            <pre>
{`└── 📁src
    └── App.js
    └── 📁assets
        └── about_img.jpg
        └── hero_img.png
    └── 📁components
        └── AddToCart.js
        └── AmountButtons.js
        └── Breadcrumb.js
        └── CartButtons.js
        └── CartItem.js
        └── CartTotals.js
        └── Contact.js
        └── EmptyCart.js
        └── Error.js
        └── Filters.js
        └── Footer.js
        └── GridProducts.js
        └── Hero.js
        └── index.js
        └── ListProducts.js
        └── Loading.js
        └── Navbar.js
        └── PopularProducts.js
        └── Products.js
        └── Services.js
        └── 📁share
            └── Button.js
            └── Icons.js
            └── Typography.js
        └── Sidebar.js
        └── Sort.js
        └── Stars.js
    └── 📁contexts
        └── cart_context.js
        └── filter_context.js
        └── products_context.js
    └── index.js
    └── 📁pages
        └── AboutPage.js
        └── CartPage.js
        └── CheckoutPage.js
        └── ErrorPage.js
        └── HomePage.js
        └── ProductsPage.js
        └── SingleProductPage.js
    └── 📁reducers
        └── cart_reducer.js
        └── filter_reducer.js
        └── products_reducer.js
    └── 📁routes
        └── ConfigRoutes.js
    └── 📁styles
        └── GlobalStyle.js
        └── GlobalStyle.js.old
        └── Screen.js
    └── 📁utils
        └── actions.js
        └── constants.js
        └── helpers.js
`}
            </pre>
          </FileStructure>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: start;
  padding: 1rem;

  ${Screen.lg`
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  `}

  .about__text {
    max-width: 600px;
    text-align: left;
    margin-left:20px;
    h1 {
      color: var(--link-color);
      margin-bottom: 1rem;
    }

    p, li {
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 1rem;
    }
  }

  .about__structure {
    ${Screen.lg`
      grid-column: 2/3;
    `}
  }
`;

const FileStructure = styled.div`
  background: var(--bg-color);
  padding: 1rem;
  margin-top: 2rem;
  border-radius: var(--radius);
  border: 0.1rem solid var(--text-color);
  font-size: var(--fs-300);

  pre {
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

export default AboutPage;
