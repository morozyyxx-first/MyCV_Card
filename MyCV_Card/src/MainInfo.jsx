
function Main() {
    return (
        <main>
            <div className="content">
                <table>
                    <caption><b>SKILLS</b></caption>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Python</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Asyncio</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Docker</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <td>Async FastAPI</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Async SQLAlchemy 2.0</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>MySQL, PostgreSQL</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Flet</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <td>Aiogram 3.x</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Git</td>
                            <td>Regular</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption><b>LANGUAGES</b></caption>
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>English</td>
                            <td>B2</td>
                        </tr>
                        <tr>
                            <td>Polish</td>
                            <td>C1</td>
                        </tr>
                        <tr>
                            <td>Ukrainian</td>
                            <td>NATIVE</td>
                        </tr>
                        <tr>
                            <td>Russian</td>
                            <td>NATIVE</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="content">
                <div id="edu">
                    <b>EDUCATION: </b> Current fourth-year student of "Technikum Energetyczne w Poznaniu"
                </div>
            </div>
            <div id="kind-of-offers-lbl">
                <b>Kind of offers:</b>
            </div>
            <div id="chat">
                <div id="wcoo">
                    <h2>What kind of offer are U expecting?</h2>
                </div>
                <div id="myresp">
                    <h3>I prefer developing APIs and learning new things, 
                        and I am open to exploring areas that are 
                        completely new to me.
                        Therefore, I would like to 
                        receive offers involving API 
                        development, backend 
                        functionality management and implementation,
                        and database work.</h3>
                </div>
            </div>
            <div id="exp">
                <b>EXPERIENCE:</b> 
                Exclusively commercial 
                projects involving work with the 
                Telegram API, backend development 
                using FastAPI and SQLAlchemy (asynchronously), 
                and the creation of custom Telegram bots. 
                A total of one year of commercial 
                experience on a freelance or independent basis.
            </div>
            <div id="projects-div">
                <b id="proj-lbl">Projects:</b><br/>
                <a href="https://anonwork-beta.vercel.app">anonwork</a>
            </div>
            <div id="github-div">
                <b id="contact-lbl">Contacts:</b><br/>
                <b>GitHub: </b><a href="https://github.com/morozyyxx-first">github-link</a>. <br/>
                <b>Phone number: </b>{import.meta.env.VITE_PHONE_NUM}<br/>
                <b>Email: </b> {import.meta.env.VITE_EMAIL}
            </div>
            <div id="note">
                <b>Note:</b><br/>
                I am open to any type of backend 
                Python programming work and welcome 
                any collaboration proposals. Thank you 
                for reviewing my CV!
            </div>
        </main>
    );
}

export default Main