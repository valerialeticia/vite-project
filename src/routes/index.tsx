import { createBrowserRouter} from 'react-router-dom'
import { Home } from '@/pages/Home/Home'
import { Details } from '@/pages/Details/Details'
import { InfiniteQuery } from '@/pages/InfiniteQuery/InfiniteQuery'
import { Error } from './Error'
import  Root  from './Root'

export const routes = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '*',
        element: <Error />
      },
      {
        path: '/posts',
        async lazy() {
          const { Posts } = await import('@/pages/Posts/Posts');
          return {
            Component: Posts
          };
        },
      },
      {
        path: '/posts/detail',
        element: <Details />
      },
      {
        path: '/infinite-query',
        element: <InfiniteQuery />
      }
    ]
  }
])
