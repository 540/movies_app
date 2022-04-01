import { useRouter } from 'next/router'
import { Detail as DetailPage } from 'ui/Detail'

const Detail = () => {
  const { query } = useRouter()

  return (
    <div>
      <DetailPage movieId={Number(query.id)} />
    </div>
  )
}

export default Detail
