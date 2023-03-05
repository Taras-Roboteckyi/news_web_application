import * as React from 'react';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingButton from '@mui/lab/LoadingButton';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';

import { authSelectors } from '../../redux/authorization';

import { PostsSelectors, fetchPosts, deletePosts } from '../../redux/posts';

import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';

import AppLoader from '../Loader/Loader';

import { Basic } from './PostList.styled';

const PostList = () => {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  const dispatch = useAppDispatch();

  const data = useAppSelector(PostsSelectors.getPosts);
  const loadingAPI = useAppSelector(PostsSelectors.getLoading);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false); //mui state
  const { t } = useTranslation(['news']); //react-i18next

  const skipPage = 10;
  const dataLimit = data.length > 0 && data.length < 150;

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  const onDeletePosts = id => {
    dispatch(deletePosts(id));

    toast.error('Sorry you deleted the contact!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  console.log('data.length', data.length);
  console.log('data', data);
  console.log('page', page);

  const handleClickLoadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + skipPage);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Basic>
      <Grid item xs={12} md={6}>
        {loadingAPI ? (
          <AppLoader />
        ) : data.length > 0 ? (
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {t('paragraph')}
          </Typography>
        ) : (
          <Typography sx={{ mt: 4, mb: 2, color: 'red' }} variant="h6" component="div">
            {t('error')}
          </Typography>
        )}

        <List
          sx={{
            pt: 0,
          }}
        >
          {data.map(({ id, body }, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  border: '1px solid',
                  borderRadius: 2,
                  borderColor: '#f6f6f6',
                  mb: 2,
                  bgcolor: '#f6f6f6',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: 'rgb(7, 177, 77, 0.42)',
                    borderColor: 'rgb(7, 177, 77, 0.42)',
                    fontSize: 24,
                  },
                }}
                secondaryAction={
                  isLoggedIn && (
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      sx={{
                        '&:hover': {
                          backgroundColor: '#ee6b6e',
                        },
                      }}
                      onClick={() => {
                        onDeletePosts(id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={body} />
              </ListItem>
            );
          })}
        </List>
        {dataLimit && (
          <LoadingButton onClick={handleClickLoadMore} loading={loading} variant="contained">
            <span>{t('button')}</span>
          </LoadingButton>
        )}
      </Grid>
    </Basic>
  );
};

export default PostList;

/* <ListStyle>
      {data.map(({ name, id number  }) => {
        return (
          <ContactListItem
            key={id}
            data={{ number, name, id }}
            onDeleteContact={() => {
              toast.error('Sorry you deleted the contact!', {
                position: toast.POSITION.TOP_CENTER,
              });
               onDeleteItems(id);
            }}
            onButtomLoadMore={handleClickLoadMore}
          />
        );
      })}
    </ListStyle> */
