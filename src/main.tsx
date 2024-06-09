import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import List from '@/pages/List';
import FavoriteProvider from '@/shared/providers/Favorite';
import PostsProvider from '@/shared/providers/Posts';
import './styles.scss';

const router = createHashRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/list',
		element: <List />,
	},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<FavoriteProvider>
			<PostsProvider>
				<RouterProvider router={router} />
			</PostsProvider>
		</FavoriteProvider>
	</React.StrictMode>,
);
