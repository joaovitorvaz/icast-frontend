import CadastroUsuario from '../modules/Authentication/pages/CadastroUsuario'

export default function cadastrarUsuario() {
  return (
   <CadastroUsuario/>
  )
}

export const getServerSideProps= async (ctx) => {
  const { ['icast.token']: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/podcasts',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};