import { useEffect, useRef, useState } from "react";
import { Text } from "../atoms/Text"
import { TopDestinationTexts } from "../particles/DataLists"
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import Choroni from "../../assets/Choroni.jpg";
import PuertoCabello from "../../assets/PuertoCabello.jpg";
import ColoniaTovar from "../../assets/ColoniaTovar.jpg";
import { Button } from "../atoms/Button";
import { CaretLeft, CaretRight, Eye, Star } from "@phosphor-icons/react";
import { Destiny } from "../particles/interfaces/destiny";
import axios from "axios";
import { getTouristicDestinationResults } from "../particles/services/destinations";

const TopDestination = () => {

    const sliderRef = useRef<Slider | null>();
    const [destinations, setDestinations] = useState<Destiny[]>([]);
    const page = 1;

    const fetchDestinations = async () => {
        try {
            const response = await getTouristicDestinationResults(page);
            if (response.status === axios.HttpStatusCode.Ok) {
                setDestinations(response.data.results);
            }
        } catch {
            setTimeout(async () => {
                await fetchDestinations();
            }, 5000);
        }
    }

    useEffect(() => {
        fetchDestinations();
    }, []);

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();

        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }

    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const getPhoto = (item: Destiny) => {
        if (item.address.includes("Choroni")) {
            return Choroni;
        } else if (item.address.includes("Puerto Cabello")) {
            return PuertoCabello;
        } else if (item.address.includes("Colonia Tovar")) {
            return ColoniaTovar;
        } else {
            return item.photo;
        }
    }

    return (
        <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
            <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                {TopDestinationTexts.firstText}
            </Text>
            <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3">
                {TopDestinationTexts.secondText}
            </Text>

            {/* Controllers  */}
            <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
                <Button onClick={previous} className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                    <CaretLeft size={18} color="currentColor" weight="fill" />
                </Button>
                <Button onClick={next} className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                    <CaretRight size={18} color="currentColor" weight="fill" />
                </Button>
            </div>

            {/* Slides  */}
            <div className="w-full h-auto mt-4">
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                    {
                       destinations.map((item, index) => (
                            <div key={index} className="md:px-6 px-3">
                                <Card cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group" imageAlt={item.short_address} imageSrc={getPhoto(item)} imageWrapperClass="w-full h-[250px] overflow-hidden" cover="group-hover:scale-125 transition duration-500 ease" textWrapperClass="flex flex-col gap-4 w-full px-5 py-5">
                                    <div className="flex justify-between items-center">
                                        <Text as="h4" className="text-base font-medium text-color3">
                                            {item.address}
                                        </Text>
                                        <div className="flex items-center gap-2">
                                            <Text as="small" className=" text-color3 font-light text-sm">
                                                {item.reviews_count}
                                            </Text>
                                            <Eye size={20} weight="fill" color="currentColor" />
                                        </div>
                                    </div>
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Star size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {item.stars_count}
                                        </Text>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </section>
    )
}

export default TopDestination