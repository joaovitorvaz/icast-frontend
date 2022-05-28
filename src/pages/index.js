import PaginaPrincipal from '../modules/Home/pages/PaginaPrincipal'
import { parseCookies } from 'nookies'

export default function Home() {

  return (
    <PaginaPrincipal />
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