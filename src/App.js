import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if (!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine
    height="100vh"
    projectID="b2db8cc3-452a-4ce1-b785-4e374d9146fe"
    userName= {localStorage.getItem("username")}
    userSecret={localStorage.getItem("password")}

    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
