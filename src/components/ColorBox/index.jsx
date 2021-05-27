import React, { useState} from 'react';
// import PropTypes from 'prop-types';
// import './ColorBox.scss'

function ColorBox() {
    function getRandomColor(){
        const color_list = ['black', 'red', 'blue','violet'];
        const randomIndex = Math.trunc(Math.random() * 5);
        return color_list[randomIndex] // sẽ trả về random 1 trong những color ở mảng 
    }
    function handleClick(){
        const newColor = getRandomColor();
        setColor(newColor);  // khi click vào sẽ cập nhật 1 color mới
        localStorage.setItem('box_color',newColor);
    }
    const [Color, setColor] = useState(() => { // vì khi render , nó chỉ có ý nghĩa đúng 1 lần đầu tiên nên phải sử dụng để k phải render nhiều lần
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });
    return (
        <div className="color-box" style={{backgroundColor: Color}} onClick={handleClick}>
            Color
        </div>
    );
}

export default ColorBox;