import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
    {
        id: 1, name: 'ณัฏฐ์ชญา บัวขจร', nickname: 'มะนาว',
        major: 'เทคโนโลยีสารสนเทศ', favorites: ['มัจฉะ', 'แมว']
    },
    {
        id: 1, name: 'วิศรุตา เอกดำรงกิจ', nickname: 'มะปราง',
        major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว']
    },
    {
        id: 1, name: 'สุจิรา พลอยสำลี', nickname: 'เฟิร์ส',
        major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชานม', 'แฮมเตอร์']
    },
];

function App() {
    return (
        <div className="container">
            <h1>สมาชิกกลุ่มของเรา</h1>
            <div className="card-row">
                {members.map((m) => (
                    <ProfileCard
                        key={m.id}
                        name={m.name}
                        nickname={m.nickname}
                        major={m.major}
                        favorites={m.favorites}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;