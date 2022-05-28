import LoginPodcast from '../modules/Authentication/pages/Login'

export default function Login() {

  return (
    <LoginPodcast />
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