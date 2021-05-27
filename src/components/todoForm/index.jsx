import React, { useState } from "react";
import PropTypes from 'prop-types';


TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};

TodoForm.defaultProps= {
    onSubmit : null,
};

function TodoForm(props) {
    function handleValueChange(e){
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!onSubmit) return; // ( kt điều kiện nếu không có ) gì sẽ return tức không làm gì cả

        const formValue = { // (kt điều kiện nếu có )cb giá trị để báo lên components cha
            title: value,
        };
        onSubmit(formValue);
        setValue('');
    }
    const {onSubmit} = props;
    const [value, setValue] = useState(''); // tạo state để lưu giá trị khi nhập vào input
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange}/> 
            {/* value={value} : truyền giá trị từ ô input lên state */}
        </form>
    );
}

export default TodoForm; 