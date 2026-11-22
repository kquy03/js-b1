$(document).ready(function () {
    $('#add-btn').click(function () {
        let taskText = $('#task-input').val().trim();

        if (taskText === '') {
            alert('Vui lòng nhập nội dung công việc!');
            return;
        }
        
        let newTask = $(`
            <li style="display: none;">
                <span>${taskText}</span>
                <button type="button" class="delete-btn">Xóa</button>
            </li>
        `);

        $('#task-list').append(newTask);
        newTask.fadeIn(300);
        
        $('#task-input').val('');
    });
    
    $('#task-input').keypress(function (e) {
        if (e.which === 13) {
            $('#add-btn').click();
        }
    });

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    $('#task-list').on('click', '.delete-btn', function (e) {
        e.stopPropagation(); 
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
    });
});
