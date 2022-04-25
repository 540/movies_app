import { useRouter } from 'next/router'
import { Detail as DetailPage } from 'ui/Detail'
import Head from 'next/Head'

const Detail = () => {
  const { query } = useRouter()

  return (
    <div>
      <Head>
        <title>Detail</title>
      </Head>
      <DetailPage movieId={Number(query.id)} />
    </div>
  )
}

export default Detail
