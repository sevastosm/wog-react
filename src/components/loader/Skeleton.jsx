import React from 'react'


const FakeElement = () => (<div class="col-lg-2 col-sm-12 m-2">
    <div class="card">
        <img src="/static/media/logo.efe8290e.svg" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h5 class="card-title">Card title</h5>

            <p class="card-text"></p>
            <a class="btn btn-primary"></a>
        </div>
    </div>
</div>)

export default function Skeleton() {
    return (
        <div class="container loading-skeleton w-100 m-auto">
            <div class="row m-auto">
                {Array.apply(0, Array(10)).map(function (x, i) {
                    return <FakeElement key={i} />;
                })}
            </div>
        </div>
    )
}
