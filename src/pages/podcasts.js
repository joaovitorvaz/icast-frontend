import { parseCookies } from 'nookies'

export default function Podcasts() {

  return (
    <p>Exemplo de rota protegida!! </p>
  )
}

export const getServerSideProps= async (ctx) => {
  const { ['icast.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};