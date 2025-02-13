import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 200 200"
        fill="none"
        color="#3f51b5"
    >
        <defs>
            <linearGradient id="spinner-secondHalf">
                <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
                <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
            </linearGradient>
            <linearGradient id="spinner-firstHalf">
                <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
                <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
            </linearGradient>
        </defs>

        <g stroke-width="8">
            <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
            <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />


            <path
                stroke="currentColor"
                stroke-linecap="round"
                d="M 4 100 A 96 96 0 0 1 4 98"
            />

        </g>


        <animateTransform
            from="0 0 0"
            to="360 0 0"
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1300ms"
        />

    </svg>
</div>
