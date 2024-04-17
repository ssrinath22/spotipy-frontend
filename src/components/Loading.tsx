type LoadingProps = {
    loadingText?: string
    ready: boolean
}
const Loading: React.FC<LoadingProps> = ({ ready, loadingText = '' }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: !ready ? '100vw' : 0,
                left: 0,
                top: 0,
                height: '100vh',
                textAlign: 'center',
                transition: 'all .5s',
                backgroundColor: '#F8F6E3'
            }}
        >
            {!ready ?
                <div
                    style={{
                        fontSize: '80px',
                        marginTop: '10%',
                        color: '#135D66'
                    }}>
                    {loadingText}
                </div>
                :
                <></>}

            <div
                style={{
                    color:'#7AA2E3',
                    opacity: 1,
                    position: 'absolute',
                    width: !ready ? '10%' : '0',
                    top: !ready ? '30%' : 0,
                    left: !ready ? '45%' : 0,
                    transition: 'all .2s',
                }}
            >
                <svg version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <circle fill="none" stroke="currentColor" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="5s"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                    </circle>
                    <circle fill="none" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="5s"
                            from="0 50 50"
                            to="-360 50 50"
                            repeatCount="indefinite" />
                    </circle>
                    <g fill="currentColor">
                        <rect x="30" y="35" width="5" height="30">
                            <animateTransform
                                attributeName="transform"
                                dur="1s"
                                type="translate"
                                values="0 5 ; 0 -5; 0 5"
                                repeatCount="indefinite"
                                begin="0.1" />
                        </rect>
                        <rect x="40" y="35" width="5" height="30">
                            <animateTransform
                                attributeName="transform"
                                dur="1s"
                                type="translate"
                                values="0 5 ; 0 -5; 0 5"
                                repeatCount="indefinite"
                                begin="0.2" />
                        </rect>
                        <rect x="50" y="35" width="5" height="30">
                            <animateTransform
                                attributeName="transform"
                                dur="1s"
                                type="translate"
                                values="0 5 ; 0 -5; 0 5"
                                repeatCount="indefinite"
                                begin="0.3" />
                        </rect>
                        <rect x="60" y="35" width="5" height="30">
                            <animateTransform
                                attributeName="transform"
                                dur="1s"
                                type="translate"
                                values="0 5 ; 0 -5; 0 5"
                                repeatCount="indefinite"
                                begin="0.4" />
                        </rect>
                        <rect x="70" y="35" width="5" height="30">
                            <animateTransform
                                attributeName="transform"
                                dur="1s"
                                type="translate"
                                values="0 5 ; 0 -5; 0 5"
                                repeatCount="indefinite"
                                begin="0.5" />
                        </rect>
                    </g>
                </svg>
            </div>

        </div>
    )
}

export default Loading
