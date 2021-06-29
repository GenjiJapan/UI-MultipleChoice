import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit : PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit : null
}

function PostFiltersForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null); // tạo ra 1 object lưu giá trị khi mình render lần 2 nó sẽ không trả về lại null

    function handleSearchTermForm(e) {
        const value = e.target.value;
        setSearchTerm(value);

        if(typingTimeoutRef.current){ // khi type vào, lệnh này sẽ clearTimeOut và tiếp tục đợi 500ms 
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {

            if(!onSubmit) return;
            const formValues = {
                searchTerm: value, // do mình set giá trị setTerm là giá trị cũ nên phải thêm e.target.value để update giá trị mới
            }
            onSubmit(formValues);
        }, 500) // làm hàm setTimeout để khi chưa type xong thì sẽ đợi 500ms, sau khi đợi đủ thời gian thì mới submit(console.log để xem)
    }
    return (
        <form >
            <input type="text" value={searchTerm} onChange={handleSearchTermForm} spellCheck={false} />
        </form>
    );
}

export default PostFiltersForm;