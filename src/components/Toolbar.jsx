export const Toolbar = () => {
    return (
        <div className="flex flex-col items-center w-full h-[300px] rounded-bl-[7rem] pt-[4rem] bg-neutral-lightGrayishBlueEmpty">
            <div className="flex flex-col gap-2 ">
                <h1 className="font-extrabold text-xl text-neutral-darkDesaturatedBlue text-center">Simple, traffic-based pricing</h1>
                <span className="text-sm text-neutral-grayishBlue text-center font-medium">Sign-up for our 30-day trial. No credit card required.</span>
            </div>
        </div>
    )
}