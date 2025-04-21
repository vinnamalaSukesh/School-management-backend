const { Section } = require("../../models");

const Update = async (req, res) => {
    try {
        const updatedSection = await Section.findById("68048515d72ee25daff77e81")
        const attendanceData = [
            {
                "date": {
                    "$date": "2025-03-01T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-02T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-03T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-04T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-05T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-06T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-07T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-08T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-09T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-10T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-11T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-12T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-13T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-14T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-15T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-16T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-17T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-18T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-19T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-20T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-21T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-22T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-23T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-24T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-25T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-26T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-27T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-28T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-29T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-30T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-03-31T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-01T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-02T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-03T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-04T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-05T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-06T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-07T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-08T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-09T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-10T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-11T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-12T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-13T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-14T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-15T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-16T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-17T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-18T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            },
            {
                "date": {
                    "$date": "2025-04-19T00:00:00.000Z"
                },
                "records": [
                    {
                        "student": {
                            "$oid": "6804854ad72ee25daff77e8a"
                        },
                        "status": "P"
                    },
                    {
                        "student": {
                            "$oid": "6804855ed72ee25daff77e8f"
                        },
                        "status": "P"
                    }
                ]
            }
        ]
        if (!updatedSection) {
            return res.status(400).json({ error: "Section not found" });
        }
        if (!Array.isArray(attendanceData)) {
            return res.status(400).json({ error: "Invalid attendanceData format. Expected an array." });
        }
        for (const entry of attendanceData) {
            const { date, records } = entry;
            const formattedDate = new Date(date.$date);

            const formattedRecords = records.map(record => ({
                student: record.student.$oid,
                status: record.status,
            }))
            const existingEntry = updatedSection.attendance.find(
                (att) => new Date(att.date).toDateString() === formattedDate.toDateString()
            );

            if (existingEntry) {
                console.warn(`Attendance for ${formattedDate.toDateString()} already exists. Skipping.`);
            } else {
                updatedSection.attendance.push({
                    date: formattedDate,
                    records: formattedRecords,
                })
            }
        }
        await updatedSection.save()

        return res.status(200).json({ section: updatedSection });
    } catch (err) {
        console.error("Error during bulk attendance insertion:", err);
        return res.status(500).json({ error: "Failed to insert bulk attendance", details: err.message });
    }
};

module.exports = Update