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



export const MainMenu = gql`
query NewQuery {
  menus {
    nodes {
      menuItems {
        nodes {
          uri
          label
        }
      }
      name
      slug
    }
  }
}`

export const PagesQ = gql`
query NewQuery($id: ID = "") {
  page(id: $id, idType: URI) {
    content
    seo {
      fullHead
    }
    pageBanner {
      title
      subTitle
      featuresList {
        list
      }
    }
    shortcontent {
      shortTitle
      shortContent
    }
    affiliateCard {
      card {
        title
        link
        info
        sbTitle
        logo {
          mediaItemUrl
        }
      }
    }
  }
}`