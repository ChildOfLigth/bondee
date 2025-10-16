export default function RegistrationInDB() {
    return (
        <>
            <div className="welcome-message">
                <h1 className="message_title">
                    Добро пожаловать у сервіс
                    <span className="message_service-name">InstagramProto</span>
                </h1>
                <h3 className="message-description">
                    Щоб почати користуватись нашим сервісом, вам потрібно зареєстуватись у системі
                </h3>
            </div>

            <div className="registration">
                <h2>Оберіть варіант реєстрації</h2>

                <div className="registration_variant">
                    <div className="registration-with-phone">
                        <h2>За допомогою мобільного телефону</h2>
                        <form className="form-registration-user">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Ваш номер моб. телефона..."
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Ваш пароль..."
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Зареєстуватись
                            </button>
                        </form>
                    </div>

                    <div className="registration-with-email">
                        <h2>За допомогою email адреси</h2>
                        <form className="form-registration-user">
                            <input
                                type="email"
                                name="email"
                                placeholder="Ваша email адреса..."
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Ваш пароль..."
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Зареєстуватись
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
