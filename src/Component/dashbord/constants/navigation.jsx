import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLogout
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'category',
		label: 'Category',
		path: 'category',
		icon: <HiOutlineCube />
	},
	{
		key: 'chats',
		label: 'chats',
		path: 'chats',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'schedules',
		label: 'schedules',
		path: 'schedules',
		icon: <HiOutlineUsers />
	},
	{
		key: 'profile',
		label: 'profile',
		path: 'profile',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'settings',
		label: 'settings',
		path: 'settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'logout',
		label: 'logout',
		path: 'logout',
		icon: <HiOutlineLogout/>
	}
]

