import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from '../components/About/styled';
import SocialLinks from '../components/SocialLinks';

const AboutPage = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(
          relativePath: {
            eq: "about.png"
          }
        ) {
          childImageSharp {
            fluid(
              maxWidth: 678,
            ) {
              ...GatsbyImageSharpFluid,
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <S.AboutPage>
        <S.AboutTitle>Sobre Mim</S.AboutTitle>
        <S.AboutImage fluid={ aboutImage.childImageSharp.fluid } />
        <S.AboutText>
          Meu nome é Gabriel Rafael Gomes e desde pequeno sou apaixonado por descobrir como as coisas funcionam.
          Minha bricadeira predileta era desmontar meus brinquedos e fazer outros à partir deles. Acho que por isso escolhi a engenharia.
          Sou formado em Engenharia de Computação pela UNIVASF e hoje atuo como desenvolvedor front-end na <a href="https://sysvale.com/" target="_blank" rel="noopener noreferrer">Sysvale</a>.
        </S.AboutText>
        <S.AboutText>
          Tenho trabalhado com o desenvolvimento de aplicações web e mobile utilizando predominantemente frameworks javascript, html e css.
          Além disso, sou apaixonado por comunidades. Nos últimos anos, tenho hosteado o HacktoberPest (que é um meetup local vinculado ao
          &nbsp;<a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">HacktoberFest</a>)
          e algumas edições do meetup VueSertão que acabou evoluindo para o <a href="https://github.com/devsertao" target="_blank" rel="noopener noreferrer">DevSertão</a>.
        </S.AboutText>
        <S.AboutText>
          Estou em estudo constante sobre boas práticas, desenvolvimento Web, UX e Agile. Buscando sempre evoluir e ajudar as pessoas da forma que eu puder. 😄
        </S.AboutText>
        <S.AboutText>
          Sinta-se à vontade para entrar em contato comigo em minha redes sociais! Vamos juntos construir uma web melhor! 🚀
        </S.AboutText>
        <SocialLinks isHorizontal={true} />
      </S.AboutPage>
    </Layout>
  );
};

export default AboutPage;
