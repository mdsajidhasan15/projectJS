  var todoArr = [];
  var todoIndex = -1;

  function init() {
      document.getElementById("tablerow").innerHTML = "";
      if (localStorage.localData) {
          todoArr = JSON.parse(localStorage.localData);
          for (var i = 0; i < todoArr.length; i++) {
              prepareTableCell(i, todoArr[i].id, todoArr[i].name, todoArr[i].date, todoArr[i].priority);
          }
      }

  }

  function registerButton() {
      var id = document.getElementById("id").value;
      var name = document.getElementById("name").value;
      var date = document.getElementById("date").value;
      var priority = document.getElementById("priority").value;

      var studentObj = {
          id: id,
          name: name,
          date: date,
          priority: priority,
      };

      if (todoIndex === -1) {
          todoArr.push(studentObj);
      } else {
          todoArr.splice(todoIndex, 1, studentObj);
      }

      localStorage.localData = JSON.stringify(todoArr);

      init();
      onClearPressed();


  }

  function prepareTableCell(index, id, name, date, priority) {
      var table = document.getElementById("tablerow");
      var row = table.insertRow();
      var idCell = row.insertCell(0);
      var nameCell = row.insertCell(1);
      var dateCell = row.insertCell(2);
      var priorityCell = row.insertCell(3);
      var actionCell = row.insertCell(4);

      idCell.innerHTML = id;
      nameCell.innerHTML = name;
      dateCell.innerHTML = date;
      priorityCell.innerHTML = priority;
      actionCell.innerHTML = '<button class="btn btn-primary" onclick="editButton(' + index + ')">Edit</button>  <button class="btn btn-danger" onclick="deleteTableRow(' + index + ')">Delete</button>';
  }

  function deleteTableRow(index) {
      // var table = document.getElementById("myTable");
      // table.deleteRow(index + 1);
      todoArr.splice(index, 1);
      localStorage.localData = JSON.stringify(todoArr);
      init();
  }

  function onClearPressed() {
      todoIndex = -1;
      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("date").value = "";
      document.getElementById("priority").value = "";
      document.getElementById("submit").innerHTML = "Register";
  }


  function editButton(index) {
      todoIndex = index;
      var studentObj = todoArr[index];
      document.getElementById("id").value = studentObj.id;
      document.getElementById("name").value = studentObj.name;
      document.getElementById("date").value = studentObj.date;
      document.getElementById("priority").value = studentObj.priority;
      document.getElementById("submit").innerHTML = "Update";
  }


  function sortTable() {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      dir = "asc";
      while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[3];
              y = rows[i + 1].getElementsByTagName("TD")[3];
              if (dir == "asc") {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              } else if (dir == "desc") {
                  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              }
          }
          if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              switchcount++;
          } else {
              if (switchcount == 0 && dir == "asc") {
                  dir = "desc";
                  switching = true;
              }
          }
      }
  }

  function filterFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("regtable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
  }

  function sortTablePriority() {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      dir = "asc";
      while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[2];
              y = rows[i + 1].getElementsByTagName("TD")[2];
              if (dir == "asc") {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              } else if (dir == "desc") {
                  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              }
          }
          if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              switchcount++;
          } else {
              if (switchcount == 0 && dir == "asc") {
                  dir = "desc";
                  switching = true;
              }
          }
      }
  }

  function sortTableDate() {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      dir = "asc";
      while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[3];
              y = rows[i + 1].getElementsByTagName("TD")[3];
              if (dir == "asc") {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              } else if (dir == "desc") {
                  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              }
          }
          if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              switchcount++;
          } else {
              if (switchcount == 0 && dir == "asc") {
                  dir = "desc";
                  switching = true;
              }
          }
      }
  }

  function edit_row(no) {
      document.getElementById("edit_button" + no).style.display = "none";
      document.getElementById("save_button" + no).style.display = "block";

      var id = document.getElementById("id_row" + no);
      var name = document.getElementById("name_row" + no);
      var priority = document.getElementById("priority_row" + no);

      var id_data = id.innerHTML;
      var name_data = name.innerHTML;
      var priority_data = priority.innerHTML;

      id.innerHTML = "<input type='text' id='id" + no + "' value='" + id_data + "'>";
      name.innerHTML = "<input type='text' id='name" + no + "' value='" + name_data + "'>";
      priority.innerHTML = "<input type='text' id='priority" + no + "' value='" + priority_data + "'>";
  }

  function save_row(no) {
      var id_val = document.getElementById("id" + no).value;
      var name_val = document.getElementById("name" + no).value;
      var priority_val = document.getElementById("priority" + no).value;

      document.getElementById("id" + no).innerHTML = id_val;
      document.getElementById("name" + no).innerHTML = name_val;
      document.getElementById("priority" + no).innerHTML = priority_val;

      document.getElementById("edit_button" + no).style.display = "block";
      document.getElementById("save_button" + no).style.display = "none";
  }

  function delete_row(no) {
      document.getElementById("row" + no + "").outerHTML = "";
  }