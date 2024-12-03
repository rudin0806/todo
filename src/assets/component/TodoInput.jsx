import { useState } from 'react';

    const TodoInput = ({ addTodo }) => {
        const [input, setinput] = useState('');
        //인풋의 초기값은 빈칸으로 셋팅, 구조분해할당
    
    //할일 추가 함수
    const handleadd = () => {
        if (input.trim()) {
            addTodo(input);
            setinput('');
        }
    };

    return (
        <div>
            <input
            type='text'
            value={input}
            // 인풋에 변화가 일어나면 setInput()함수 실행해
            onChange={(e) => setinput(e.target.value)}
            placeholder="오늘 해야하는 일을 등록하렴 수연아"
            />
            <button on onClick={handleadd}> 할일 등록 ㄱ</button>
        </div>
    )
  };

export default TodoInput;