import React from 'react'


const FakeElement = () => (<div className="col-lg-2 col-sm-12 m-2">
    <div className="card">
        <img src="./static/media/logo.efe8290e.svg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h5 className="card-title">Card title</h5>

            <p className="card-text"></p>
            <a className="btn btn-primary"></a>
        </div>
    </div>
</div>)

export default function Skeleton() {
    return (
        <div className="container loading-skeleton w-100 m-auto">
            <div className="row m-auto">
                {Array.apply(0, Array(10)).map(function (x, i) {
                    return <FakeElement key={i} />;
                })}
            </div>
        </div>
    )
}
