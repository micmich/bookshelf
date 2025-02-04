import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from 'components/logo'

import {Dialog, DialogOverlay, DialogContent} from "@reach/dialog";
import "@reach/dialog/styles.css";

import './styles/index.css'

// 🐨 you'll need to import react and createRoot from react-dom up here

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

function App({}) {
    const [open, setOpen] = React.useState(false);
    const [login, setLogin] = React.useState();
    const [isLoading, setLoading] = React.useState(false);
    const loginRef = React.useRef();
    const passRef = React.useRef();


    function clicked(name) {
        setOpen(true);
    }

    function submit(e) {
        e.preventDefault()

        console.log('login field', loginRef.current.value);
        console.log('password field', passRef.current.value);
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 5000)
    }

    return <>
        <Logo/>
        <h1>Bookshelf</h1>
        <button onClick={(e) => clicked(e.currentTarget.name)} name="Login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-1">Login</button>
        <button onClick={(e) => clicked(e.currentTarget.name)} name="Register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-1">Register</button>

        <Dialog ariaLabel="Hello label" isOpen={open}>
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Hello dialog!</h2>
                <form onSubmit={submit} className="space-y-4">
                    <div className="space-y-1"><label className="block text-sm font-medium text-gray-700">Login:</label><input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ref={loginRef}/></div>
                    <div className="space-y-1"><label className="block text-sm font-medium text-gray-700">Pass:</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            type="password" ref={passRef}/></div>
                    <button
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        name="Login">Login {isLoading && (<Spinner/>)}
                    </button>
                </form>
            </div>
        </Dialog>
    </>
}

function Spinner() {
    return (
        <svg className="text-gray-300 animate-spin w-full mt-3" viewBox="0 0 64 64" fill="none"
             xmlns="http://www.w3.org/2000/svg"
             width="24" height="24">
            <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round"
                strokeLinejoin="round"></path>
            <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                className="text-gray-900">
            </path>
        </svg>
    )
}

createRoot(document.getElementById('root')).render(
    <App></App>)
