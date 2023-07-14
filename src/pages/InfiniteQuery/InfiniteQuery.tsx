import { useMemo } from 'react'
import { useInfiniteQuery } from "react-query"
import { Box, Button, Paper, Typography } from "@mui/material"
import { getPosts } from "@/services/infinite-query"
import { grey } from '@mui/material/colors'
import { CircularProgress } from '@/components/CircularProgress'

type Items = {
  body: string; 
  id: number;
  title: string;
  userId: number
}

export const InfiniteQuery = () => {
  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery(
    'posts',
    ({pageParam = 1 }) => getPosts({pageParam}), 
    {
      getNextPageParam: ({lastPage , allPages}: any) => {
        return lastPage?.length ? allPages.length + 1 : undefined
      }
    }
  )
  
  const items:Items[] = useMemo(() => {
    return data?.pages.reduce((accPages, page) => {
      return [...accPages, ...page]
    }, [])
  }, [data])

  return (
    <Paper sx={{p: 2.5, m: 3}}>
      {isLoading && (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      )}
      {
        items?.map(item => (
          <Box
            component="section" 
            key={item.id} 
            sx={{
              border: '1px solid #dedede', 
              borderRadius: '0.3rem ', 
              p: 1.5,
              mb: 2,
              '&:last-child': {
                mb: 0
              } 
            }}
          >
            <Typography variant="h6" sx={{fontWeight: 'bold'}}>{item.title}</Typography>
            <Typography variant="body2" color={grey[600]}>{item.body}</Typography>
          </Box>
        ))
      }
      {hasNextPage && (
        <Box component="section" sx={{ display: 'flex', justifyContent: 'center'}}>
          <Button 
            variant="contained"
            disabled={isFetchingNextPage} 
            sx={{
              boxShadow: '0',
              textTransform: 'uppercase', 
              fontWeight: 'normal'
            }}
            onClick={() => fetchNextPage}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        </Box>
      )}
    </Paper>
  )
}
