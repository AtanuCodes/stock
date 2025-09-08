import * as React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import ProductIncomeFund from "@/assets/images/Product_IncomeFund.jpg";
import ProductShariahFund from "@/assets/images/Product_ShariahFund.jpg";
import ProductEasyInvest from "@/assets/images/Product_EasyInvest.jpg";
import ProductFinance from "@/assets/images/Product_Finance.jpg";
import ProductBo from "@/assets/images/Product_BO_Account.jpg";
import {useNavigate} from "react-router-dom";

const images = [
    ProductIncomeFund,
    ProductShariahFund,
    ProductEasyInvest,
    ProductFinance,
    ProductBo
]

const CarouselComponent = () => {
    const [api, setApi] = React.useState();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [autoplay] = React.useState(true);

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    React.useEffect(() => {
        if (!api || !autoplay) {
            return
        }
        const interval = setInterval(() => {
            const nextIndex = (api.selectedScrollSnap() + 1) % count
            api.scrollTo(nextIndex)
        }, 3000) // Change slide every 3 seconds

        return () => clearInterval(interval)
    }, [api, autoplay, count])

    return (
        <div className="w-full max-w-3xl mx-auto bg-white">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 my-10">
                                <img
                                    src={src}
                                    alt={`Carousel image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute bottom-4 left-0 right-0">
                    <div className="flex items-center justify-center gap-2">
                        {Array.from({length: count}).map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="icon"
                                className={`w-3 h-3 rounded-full ${
                                    index === current - 1 ? 'bg-primary' : 'bg-gray-300'
                                }`}
                                onClick={() => api?.scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </Carousel>
            <div className='text-right'>
                <Button onClick={() => window.open("https://idlc.com/")} variant='link'
                        className='text-blue-800 font-semibold h-8 py-0'>Learn More...</Button>
            </div>
        </div>
    )
};

export default CarouselComponent;