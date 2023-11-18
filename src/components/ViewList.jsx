import { PeopleListBox } from "../components/Main/PeopleListBox";
import { ChatListBox } from "../components/Main/ChatListBox";
import { ChatAndPeopleListContainer } from "../css/styled/Main/main.styled";

{/* index 값은 map함수의 파라미터, 사용할 데이터와 분리해서 적을것 */}
export const ViewList = ({isChatListActive, setIsChatContentActive, users, setChoosedUser }) => {

    return (
        <ChatAndPeopleListContainer className="main-middle-pane">
            {
                isChatListActive ? (
                    users.map((user,idx) => <ChatListBox user={user} setChoosedUser={setChoosedUser} setIsChatContentActive={setIsChatContentActive} key={idx} />)
                ) : (
                    users.map((user,idx) => <PeopleListBox username={user.name} userimg={user.profileImg} key={idx}/>)
                )
            }
        </ChatAndPeopleListContainer>
    )
}