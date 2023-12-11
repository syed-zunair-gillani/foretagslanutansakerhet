import { gql } from "@apollo/client";

export const HomePageQ = gql`
query HomePage {
  page(id: "10", idType: DATABASE_ID) {
    content
    seo {
      fullHead
    }
    homePage {
      excerpt
      affiliateSection {
        logo {
          mediaItemUrl
        }
        link
        description
        features {
          feature
        }
        subTitle
      }
      featureCard {
        info
        title
      }
    }
    pageBanner {
      title
      subTitle
      featuresList {
        list
      }
    }
  }
}
`;

