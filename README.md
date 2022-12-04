## ROUTES
<hr>
<br>

HTTP | PATH | DESCRIPTION | JSON
------ | ------ | ------ |  ------
GET    | /   |  Index Page |  NO
GET   | /hotels/list   |  Hotels List |  NO
GET   | /house/create   |  Create House from render |  NO
POST  | /house/create   |  Create House from handler  |  NO
GET   | /house/list/:id   |  House details  |  NO
GET   | /house/:id/edit  |  Edit House from render |  NO
POST  | /house/:id/edit  |  Edit House from handler |  NO
POST  | /house/:id/delete  |  Delete House |  NO
GET   | /hotels/create   |  Create Hotel form render  |  NO
POST  | /hotels/create   |  Create Hotel from handler  |  NO
GET   | /hotels/list/:id   |  Hotel Details  |  NO
GET   | /hotels/:id/edit  |  Edit Hotel from render |  NO
POST  | /hotels/:id/edit  |  Edit Hotel from handler |  NO
POST  | /hotels/:id/delete  |  Delete Hotel |  NO

<br>
<hr>

HTTP | PATH | DESCRIPTION | JSON
------ | ------ | ------ |  ------
GET   | /user/:id  |  Profile  |  NO
GET   | /creator/:id  |  Profile  |  NO
GET   | /admin/:id  |  Profile  |  NO
<hr>
<br>

HTTP | PATH | DESCRIPTION | JSON
------ | ------ | ------ |  ------
GET   | /api/places |  places  |  ✅