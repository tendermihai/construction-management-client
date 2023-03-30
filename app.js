async function getConstruction() {
  let data = await fetch("http://localhost:9090/api/v1/constructions/all");
  let conv = await data.json();
  console.log(conv);
  attachCards(conv);
}

getConstruction();

function createCard(person) {
  let section = document.createElement("section");

  section.innerHTML = `
  <div class="col-md-6 col-xl-3">
                <div class="card m-b-30">
                    <div class="card-body row">

                        <div class="col-6 card-title align-self-center mb-0">
                            <h5>${person.first_name + person.last_name}</h5>
                            <p class="m-0">${person.role}</p>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fa float-right"></i>Gender: ${
                      person.gender
                    }</li>
                        <li class="list-group-item"><i class="fa fa-envelope float-right"></i>Email: <a
                                href="#">${person.email}</a></li>
                        <li class="list-group-item"><i class="fa fa-phone float-right"></i>Phone : ${
                          person.phone
                        }</li>
                    </ul>
                    <div class="card-body">
                        <div class="float-right btn-group btn-group-sm">
                            <a href="#" class="btn btn-primary tooltips" data-placement="top" data-toggle="tooltip"
                                data-original-title="Edit"><i class="fa fa-pencil"></i> </a>
                            <a href="#" class="btn btn-secondary tooltips" data-placement="top" data-toggle="tooltip"
                                data-original-title="Delete"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="social-links list-inline mb-0">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip"
                                    class="tooltips" href="" data-original-title="Facebook"><i
                                        class="fa fa-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip"
                                    class="tooltips" href="" data-original-title="Twitter"><i
                                        class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip"
                                    class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  `;

  return section;
}

function attachCards(persons) {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  persons.forEach((person) => {
    container.appendChild(createCard(person));
  });
}
