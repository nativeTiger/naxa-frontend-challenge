import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceRequest } from "../redux/service/serviceActions";
import { Loading } from "../components/Loading";

export default function Service() {
  const { loading, services, errors } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  // sorting in ascending order of service_order
  const ascendingServiceOrder = (a, b) => {
    return a.service_order - b.service_order;
  };

  useEffect(() => {
    dispatch(fetchServiceRequest());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : errors ? (
        <h2 className="text-center text-3xl font-semibold text-gray-800 my-10">
          {errors}
        </h2>
      ) : (
        services.sort(ascendingServiceOrder).map((service, index) => (
          <section id={service.id} key={index} className="my-14">
            <div className="container mx-auto px-4 md:px-20 grid gap-10 items-center md:grid-cols-2">
              <img
                className={`w-full ${
                  service.service_order % 2 === 0 && "md:order-1"
                } `}
                src={service.icon}
                alt={service.title}
              />
              <figure>
                <img className="w-12" src={service.photo} alt={service.title} />
                <figcaption>
                  <h3 className="text-2xl text-gray-800 font-medium my-5">
                    {service.title}
                  </h3>
                  <div
                    className="text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: service.description1 }}
                  ></div>
                  <div
                    className="bg-[#e9ebff] p-6 text-sm text-gray-700 my-8 rounded-sm"
                    dangerouslySetInnerHTML={{ __html: service.description2 }}
                  ></div>
                </figcaption>
              </figure>
            </div>
          </section>
        ))
      )}
    </>
  );
}
