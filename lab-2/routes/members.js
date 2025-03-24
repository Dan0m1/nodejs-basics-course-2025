var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const membersData = [
    {
        id: 1,
        data: {
            name: "Сінянський Арсен",
            role: "Розробник",
            photo: "/images/members/arsen.jpg",
            bio: "Студент КПІ, цікавлюсь веб-розробкою",
            skills: [
                "JavaScript",
                "Node.js",
                "HTML/CSS",
                "React"
            ],
            contacts: {
                telegram: "Ambjorn123"
            }
        },
    },
    {
        id: 2,
        data: {
            name: "Шевченко Богдан",
            role: "Розробник",
            photo: "/images/members/bohdan.jpg",
            bio: "Студент КПІ, цікавлюсь веб-розробкою, аналізом даних та blockchain технологіями",
            skills: [
                "JavaScript",
                "Node.js",
                "Next.JS",
                "Python",
                "FastApi",
                "Kotlin",
                "Jetpack Compose",
                "PostgreSQL",
                "MSSQL",
                "Redis"
            ],
            contacts: {
                email: "bohdan.shevchenko182@gmail.com",
                telegram: "dan0m1"
            }
        },
    },
    {
        id: 3,
        data: {
            name: "Ковальчук Владислав",
            role: "Розробник",
            photo: "/images/members/vladislav.jpg",
            bio: "Студент КПІ, цікавлюсь веб-розробкою",
            skills: [
                "JavaScript",
                "Node.js",
                "Express"
            ],
            contacts: {
                telegram: "Haakbon"
            }
        },
    }
];


/* GET users listing. */
router.get('/:id', function (req, res, next) {
    const id = req.params.id

    if(!(/^\d+$/.test(id))) {
        next(createError(404))
    }

    const member = membersData.find((value) => parseInt(id) === value.id)

    if (!member) {
        next(createError(404))
    }

    return res.render("member", {member: member.data});
});

module.exports = router;
