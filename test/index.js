
let tableHead=` <table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Fist Name</th>
<th scope="col">Last Name</th>
<th scope="col">Age</th>
</tr>
</thead>
<tbody>`

let TableBody=`<tr>
<th scope="row">1</th>
<td>Usman</td>
<td>Ramzan</td>
<td>19</td>
</tr>`
let tableEnd=`</tbody>
</table>`


document.getElementById("output").innerHTML=tableHead+TableBody+tableEnd;