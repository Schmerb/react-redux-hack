import React from 'react';

export default function UsersIcon(props) {
    return(
        // <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152.7137 1152.4399"><path d="M523.194 1150.697c-109.212-10.84-207.53-48.914-293.707-113.738C98.894 938.723 17.78 792.893 1.977 627.925c-3.7-38.636-2.09-95.627 3.85-136.16 28.578-195.03 157.01-363.43 338.035-443.237 45.52-20.07 99.233-35.58 147.913-42.713 52.93-7.756 116.243-7.756 169.174 0 195.027 28.578 363.428 157.01 443.235 338.035 20.07 45.52 35.58 99.233 42.712 147.913 7.756 52.93 7.756 116.243 0 169.174-21.97 149.94-103.985 287.032-226.113 377.96-85.78 63.867-184.115 101.42-292.848 111.836-23.893 2.29-81.506 2.268-104.742-.04zM753.368 778.62c-3.27-39.222-21.433-78.276-49.797-107.074-74.753-75.9-201.627-69.995-266.91 12.423-5.665 7.153-11.496 15.257-12.956 18.007-1.46 2.75-3.036 5.28-3.5 5.625-.467.344-1.754 2.594-2.862 5-6.28 13.64-8.48 18.677-8.48 19.418 0 .456-.782 2.602-1.738 4.768-2.685 6.087-8.065 31.587-8.94 42.376l-.785 9.688h356.82l-.852-10.23zm-360.76-33.83c1.582-6.36 3.612-13.25 4.513-15.313.902-2.063 3.353-7.79 5.448-12.728 4.892-11.528 14.722-28.536 22.157-38.336 8.96-11.81 29.9-31.825 42.326-40.457 6.153-4.273 12.28-8.544 13.618-9.49 2.27-1.606 1.867-2.036-6.127-6.506-39.912-22.32-90.432-26.37-133.032-10.662-56.07 20.674-95.54 69.285-104.578 128.804-.992 6.53-1.807 12.86-1.81 14.062-.01 2.06 4.504 2.188 77.302 2.188h77.31l2.876-11.563zm524.997 9.374c0-1.203-.82-7.53-1.81-14.062-9.04-59.52-48.51-108.13-104.58-128.804-42.6-15.707-93.12-11.658-133.032 10.663-7.994 4.47-8.398 4.9-6.127 6.507 1.337.946 7.465 5.217 13.617 9.49C698.1 646.59 719.04 666.603 728 678.414c7.434 9.8 17.264 26.808 22.156 38.335 2.095 4.937 4.546 10.664 5.447 12.727.9 2.062 2.93 8.953 4.513 15.312l2.876 11.562h77.31c72.798 0 77.31-.128 77.303-2.188zM595.933 588.89c55.956-13.416 83.46-73.465 56.96-124.357-3.147-6.044-7.948-12.19-15.306-19.593-9.03-9.086-12.585-11.688-22.536-16.496-50.616-24.46-109.54 2.062-123.166 55.438-3.06 11.985-3.068 32.392-.017 43.095 13.016 45.663 58.637 72.805 104.066 61.913zm-182.09-14.486c14.657-3.454 25.786-9.795 36.94-21.045 11.48-11.58 16.947-20.932 20.61-35.253 4.677-18.29 2.244-39.16-6.517-55.898-5.358-10.236-21.636-26.514-31.872-31.872-22.42-11.736-50.864-11.736-73.284 0-10.236 5.358-26.514 21.636-31.872 31.87-8.76 16.74-11.194 37.61-6.517 55.9 3.664 14.32 9.132 23.673 20.61 35.25 10.966 11.06 22.256 17.575 36.38 20.992 9.865 2.386 25.53 2.41 35.523.055zm360 0c14.657-3.454 25.786-9.795 36.94-21.045 11.48-11.58 16.947-20.932 20.61-35.253 4.677-18.29 2.244-39.16-6.517-55.898-5.358-10.236-21.636-26.514-31.87-31.872-22.422-11.736-50.866-11.736-73.286 0-10.236 5.358-26.514 21.636-31.872 31.87-8.76 16.74-11.194 37.61-6.517 55.9 3.664 14.32 9.132 23.673 20.61 35.25 10.966 11.06 22.256 17.575 36.38 20.992 9.865 2.386 25.53 2.41 35.523.055z"/></svg>
        // <svg className={props.className}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1150.9491 1151.2191"><path d="M549.85 1150.978c-20.49-1.266-41.646-3.34-56.875-5.574-120.772-17.72-230.757-71.86-318.56-156.804C83.532 900.67 24.026 784.162 5.552 657.975 1.294 628.893 0 609.672 0 575.475c0-34.198 1.293-53.42 5.55-82.5 17.666-120.666 71.855-230.76 156.8-318.56C250.28 83.532 366.788 24.026 492.975 5.552c29.08-4.257 48.302-5.55 82.5-5.55 34.197 0 53.418 1.293 82.5 5.55C784.162 24.025 900.67 83.53 988.6 174.417c26.587 27.48 45.6 51.08 66.198 82.165 54.005 81.498 85.22 170.417 94.61 269.52.848 8.937 1.54 31.156 1.54 49.375 0 44.496-3.068 75.172-11.783 117.77-14.705 71.874-45.726 144.69-88.167 206.96-48.343 70.926-114.325 132.032-188.648 174.704-70.928 40.722-153.526 66.753-235.625 74.257-15.463 1.414-64.587 2.57-76.875 1.81zm77.868-139.798c129.692-16.893 241.29-85.757 312.085-192.58 38.837-58.602 62.062-122.512 70.86-195 2.208-18.19 2.208-75.56 0-93.75-14.47-119.203-71.01-221.842-162.688-295.335-63.245-50.698-140.885-82.693-225.625-92.98-18.19-2.207-75.56-2.207-93.75 0-84.74 10.287-162.38 42.282-225.625 92.98-91.68 73.493-148.22 176.132-162.69 295.335-2.207 18.19-2.207 75.56 0 93.75 14.468 119.186 71.054 221.91 162.69 295.338 63.303 50.725 146.2 84.78 225.625 92.69 7.562.755 15.718 1.594 18.125 1.867 10.35 1.173 66.544-.433 80.993-2.315zM395.475 788.018c0-4.955 4.427-31.617 6.856-41.293 3.71-14.773 11.307-32.654 18.42-43.35 1.91-2.875 3.475-5.58 3.475-6.012 0-2.214 16.076-21.347 25.9-30.823 14.787-14.268 27.955-23.6 44.725-31.7 25.034-12.09 43.888-16.697 72.5-17.714 24.818-.883 42.11 1.398 63.255 8.34 69.434 22.8 116.385 82.12 122.934 155.32l.754 8.44h-179.41c-114.514 0-179.41-.438-179.41-1.208zm-161.707-32.27c-.792-1.282 1.305-18.203 3.62-29.2 9.637-45.82 42.51-87.905 85.348-109.267 14.03-6.996 30.444-12.44 45.287-15.02 17.738-3.084 50.062-1.95 66.345 2.328 18.372 4.826 46.907 17.583 48.19 21.544.216.67-3.628 3.7-8.543 6.73-38.424 23.71-69.8 66.41-80.907 110.113l-3.336 13.125-77.694.32c-42.732.18-77.97-.125-78.31-.673zm527.31-.577c-.317-.863-1.926-6.914-3.575-13.445-5.114-20.253-17.937-46.25-31.52-63.903-13.196-17.148-32.182-34.55-49.05-44.96-4.914-3.03-8.758-6.06-8.54-6.73 1.282-3.96 29.816-16.718 48.188-21.544 16.285-4.277 48.608-5.41 66.346-2.328 66.63 11.582 120.125 64.428 131.687 130.09 1.09 6.187 2.15 14.062 2.36 17.5l.377 6.25-77.85.32c-61.623.256-77.967-.008-78.423-1.248zM562.393 590.4c-20.488-3.168-41.474-14.717-54.228-29.843-7.196-8.534-15.816-25.712-18.232-36.334-2.262-9.95-2.552-27.48-.63-38.206 1.72-9.598 10.74-28.25 17.93-37.078 17.866-21.932 49.402-34.543 77.48-30.983 59.023 7.484 93.885 66.35 71.266 120.337-9.866 23.548-33.72 43.95-58.63 50.152-10.01 2.49-25.782 3.373-34.956 1.954zM379.85 574.96c-17.337-4.012-29.746-11.094-41.55-23.713-8.985-9.603-12.954-16.228-17.398-29.035-2.96-8.53-3.422-11.806-3.422-24.237 0-12.432.463-15.71 3.422-24.238 4.444-12.807 8.413-19.432 17.397-29.035 9.518-10.176 18.905-16.307 32.12-20.978 9.512-3.363 12.252-3.776 25.055-3.776 12.803 0 15.542.413 25.055 3.776 13.214 4.67 22.6 10.802 32.12 20.978 8.984 9.603 12.953 16.228 17.397 29.035 2.96 8.53 3.422 11.806 3.422 24.238 0 12.43-.464 15.708-3.423 24.237-4.444 12.807-8.413 19.432-17.397 29.035-9.548 10.207-18.978 16.354-31.945 20.824-12.753 4.396-29.285 5.565-40.855 2.89zm360 0c-17.336-4.012-29.746-11.094-41.55-23.713-8.985-9.603-12.954-16.228-17.398-29.035-2.96-8.53-3.422-11.806-3.422-24.237 0-12.432.463-15.71 3.422-24.238 4.444-12.807 8.413-19.432 17.397-29.035 9.518-10.176 18.905-16.307 32.12-20.978 9.512-3.363 12.252-3.776 25.055-3.776 12.803 0 15.542.413 25.055 3.776 13.214 4.67 22.6 10.802 32.12 20.978 8.984 9.603 12.953 16.228 17.397 29.035 2.96 8.53 3.422 11.806 3.422 24.238 0 12.43-.464 15.708-3.423 24.237-4.444 12.807-8.413 19.432-17.397 29.035-9.548 10.207-18.978 16.354-31.944 20.824-12.754 4.396-29.286 5.565-40.856 2.89z"/></svg>
        <svg className={props.className}  xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 32 32"><path d="M26 26v4H6v-4c0-5.043 1.59-4.29 7.562-6.867C11.465 17.625 10 14.445 10 12c0-3.312 2.684-6 6-6 3.312 0 6 2.688 6 6 0 2.445-1.47 5.625-3.566 7.133C24.406 21.71 26 20.957 26 26zm-1.566-10.867C26.53 13.625 28 10.445 28 8c0-3.312-2.688-6-6-6-1.84 0-3.484.832-4.586 2.133C21.152 4.805 24 8.073 24 12c0 2.113-.828 4.477-2.117 6.355l.465.172C26.164 19.95 28 20.86 28 26h4v-4c0-5.043-1.594-4.29-7.566-6.867zm-14.32 3.222C8.827 16.477 8 14.113 8 12c0-3.926 2.848-7.195 6.582-7.867C13.484 2.833 11.84 2 10 2 6.684 2 4 4.688 4 8c0 2.445 1.465 5.625 3.562 7.133C1.59 17.71 0 16.957 0 22v4h4c0-5.14 1.832-6.05 5.648-7.473.153-.054.31-.113.465-.172z"/></svg>
    );
}