import { parseCookies } from 'nookies'
import PodcastList from '../modules/Podcasts/pages/Podcasts'

export default function Podcasts() {

  return (
    <PodcastList/>
  )
}

/*
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
};*/