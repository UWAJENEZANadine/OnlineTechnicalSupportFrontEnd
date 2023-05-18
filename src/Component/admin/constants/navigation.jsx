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

export const SUPPORT_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'category',
		label: 'New FAQ',
		path: 'category',
		icon: <HiOutlineCube />
	},
	{
		key: 'chats',
		label: 'chats',
		path: 'chats',
		icon: <HiOutlineShoppingCart />
	}
]

