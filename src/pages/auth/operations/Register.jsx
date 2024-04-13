import img from './../../../assets/register.svg'
import './style.css'

export default function Register() {
    return (
        <div className='parent'>
            <div className='parent-content'>
                <div className="main-info">
                    <div className="form-data">
                        <h2>Sign up</h2>
                        <p className='desc'>Start your 30-day free trial.</p>
                        <form>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email Address" />
                            <input type="password" placeholder="Password" />
                            <p>
                                You are agreeing to the <span>Terms of Services</span> <br /> and <span>Privacy Policy</span>
                            </p>
                            <button>Get started</button>
                        </form>
                        <p>Already a member? <span>Sign in</span></p>
                    </div>
                </div>
                <div className="image-cover">
                    <p>Very good works are <br />
                        waiting for you <br />
                        Sign up Now</p>
                    <img src={img} alt="Sign Up Image" />
                </div>
            </div>
        </div>
    )
}