---
date: 2015-01-04 00:02:55
title: Testing Post 2
description: Test description 2
category: JS
background: "#7AAB13"
---

# Lorem

Tempor consequat dolor ex excepteur duis reprehenderit exercitation amet et eiusmod. Enim et adipisicing sint cillum id incididunt magna irure. In ex nulla laborum ea incididunt pariatur commodo ipsum.

```jsx
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(
          relativePath: {
            eq: "profile-photo.png"
          }
        ) {
          childImageSharp {
            fixed(
              width: 60,
              height: 60
            ) {
              ...GatsbyImageSharpFixed,
            }
          }
        }
      }
    `
  );

  return <S.AvatarWrapper fixed={ avatarImage.childImageSharp.fixed } />;
};

export default Avatar;
```

Lorem officia Lorem sunt duis do fugiat cupidatat proident consectetur nulla. Proident ipsum amet aliqua sint excepteur aliquip voluptate eiusmod eiusmod. Culpa aliqua anim sunt irure. Laborum velit aliqua exercitation laboris commodo.

Sint est sunt quis non eiusmod officia labore exercitation sint quis minim enim culpa. Ut anim cillum eiusmod adipisicing sit commodo est voluptate do. Cillum nulla veniam amet ea exercitation ut quis commodo cillum officia. Id dolor elit Lorem culpa ullamco minim laboris fugiat voluptate Lorem consequat mollit sunt reprehenderit.