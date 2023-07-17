import { useMemo, useState } from 'react'
import { useInfiniteQuery } from "react-query"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { getPosts } from "@/services/infinite-query"
import { grey } from '@mui/material/colors'
import { CircularProgress } from '@/components/CircularProgress'



export const InfiniteQuery = () => {
  const [title, setTitle] = useState('')

  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery(
    ['posts', [title]],
    ({pageParam = 1 }) => getPosts({pageParam, title}), 
    {
      getNextPageParam: (lastPage , allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined
      }
    }
  )

  const items = useMemo(() => {
    return data?.pages.reduce((accPages, page) => {
      return [...accPages, ...page]
    }, [])
  }, [data])

  return (
    <Paper sx={{p: 2.5, m: 3}}>
      <>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <TextField 
            id="filter-title" 
            label="Filtre um titulo" 
            variant="standard" 
            value={title}
            sx={{mb: 3, mt: 1.5}}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button 
            variant="contained"
            disabled={title === ''} 
            sx={{
              boxShadow: '0',
              textTransform: 'uppercase', 
              fontWeight: 'normal',
              ml: 2
            }}
            onClick={() => setTitle('')}
          >
            Limpar
          </Button>
        </Box>
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
        {isLoading || isFetchingNextPage && (
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress />
          </Box>
        )}
        {hasNextPage && !title && (
          <Box component="section" sx={{ display: 'flex', justifyContent: 'center'}}>
            <Button 
              variant="contained"
              disabled={isFetchingNextPage} 
              sx={{
                boxShadow: '0',
                textTransform: 'uppercase', 
                fontWeight: 'normal'
              }}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
            </Button>
          </Box>
        )}
      </>
    </Paper>
  )
}
