import { h, app } from 'hyperapp'
const view = () =>
  <div>
    <div class="blog-card">
      <div class="author">
        <img class="author-photo" src="https://avatars.dicebear.com/v2/male/fl.svg" />

        <span class="author-name"><a href="#">afbk</a></span><br />


      </div>

      <div class="blog-post">
        <div class="blog-header">
          <h1>Learning to Code</h1>
          <p class="blog-date">Aug. 24, 2015</p>
        </div>
        <h2>Opening a door to the future</h2>
        <p class="blog-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit voluptatum
            at, quam nihil eum cupiditate officiis corporis fugit facilis expedita sequi atque, culpa impedit hic
            porro voluptatem dolor non tenetur doloribus incidunt aut tempore! Porro beatae delectus aliquid sunt
            quis molestiae nisi pariatur accusantium consequuntur ratione autem est optio quia neque, reiciendis
            temporibus, illum obcaecati cupiditate voluptas doloribus. Quas eaque esse nulla ullam, ex est tempora
            quisquam consectetur, temporibus aliquid nam blanditiis incidunt laboriosam nobis vero totam, nostrum
            quaerat ut. Rem id laboriosam in, ducimus voluptatem labore sunt a, voluptas ad aut quasi magni itaque
            temporibus hic enim corrupti aliquam tenetur natus. Vitae pariatur odit recusandae veniam voluptatem
            itaque velit dolorem quasi nobis error assumenda sapiente tenetur ipsum inventore aliquam nulla
            repudiandae possimus laboriosam, quos asperiores nostrum tempora quo voluptatum saepe. Iste maiores
            illo id. Commodi aspernatur error delectus vero officia maxime, rerum repellendus culpa, temporibus
            eius suscipit officiis corporis eveniet non magnam sed animi quisquam mollitia accusantium obcaecati
            eaque quae esse! Magni, commodi fuga alias eum ullam veniam soluta provident. Ipsum ullam maxime
            tempore molestiae impedit culpa nostrum qui minus officiis nemo. Eaque facilis perspiciatis delectus!
        Eos incidunt quo accusamus repellendus eveniet soluta eius tenetur, enim alias ab?</p>

      </div>
    </div >
  </div>

app({}, {}, view, document.body)