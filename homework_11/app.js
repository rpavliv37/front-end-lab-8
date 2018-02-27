var rootNode = document.getElementById("root");

function createFolderTree(arr) {
    var ul = document.createElement('ul');
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.id = arr[i].title;
        if (arr[i].folder) {
            var div = document.createElement('div');
            div.onclick = function(e) {
                var elToHide = e.currentTarget.parentElement.querySelector('ul') || e.currentTarget.parentElement.querySelector('p');
                elToHide.style.display = elToHide.style.display === 'none' ? 'block' : 'none';
                e.currentTarget.querySelector('i').innerHTML = elToHide.style.display === 'none' ? 'folder' : 'folder_open';
            }
            var icon = document.createElement('i');
            icon.textContent = 'folder';
            var span = document.createElement('span');
            span.innerHTML = arr[i].title;
            li.appendChild(div);
            div.appendChild(icon);
            div.appendChild(span);

            if (arr[i].children) {
                var insUl = createFolderTree(arr[i].children);
                insUl.style.display = 'none';
                li.appendChild(insUl);
            } else {
                var p = document.createElement('p');
                p.innerHTML = 'Folder is empty';
                p.style.display = 'none';
                li.appendChild(p);
            }
        } else {
            var div = document.createElement('div');
            var icon = document.createElement('i');
            icon.textContent = 'insert_drive_file';
            icon.setAttribute('style', 'color: #BBB');
            var span = document.createElement('span');
            span.innerHTML = arr[i].title;
            li.appendChild(div);
            div.appendChild(icon);
            div.appendChild(span);
        }
        icon.className = 'material-icons';
        ul.appendChild(li);
    }
    return ul;
}

rootNode.appendChild(createFolderTree(structure));