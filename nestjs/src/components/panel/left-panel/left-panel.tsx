"use client"
import { Accordion, AccordionDetails, AccordionSummary, Box, ListItem, Typography } from '@mui/material'
import style from './left-panel.module.css'
import Link from 'next/link';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usePathname } from 'next/navigation';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const navbarHeadings: Record<string, { name: string, path: string }[]> = {
    "Overview": [
        { name: "First steps", path: "/overview/first-step" },
        { name: "Controllers", path: "/overview/controllers?1" },
        { name: "Providers", path: "/overview/providers" },
        { name: "Modules", path: "/overview/modules" },
        { name: "Middleware", path: "/overview/middleware" },
        { name: "Exception filters", path: "/overview/exception-filter" },
        { name: "Pipes", path: "/overview/pipes" },
        { name: "Guards", path: "/overview/guards" },
        { name: "Interceptors", path: "/overview/interceptors" },
        { name: "Custom decorators", path: "/overview/custom-decorators" }
    ],
    "Fundamentals": [
        { name: "Custom providers", path: "/fundamentals/custom-providers" },
        { name: "Asynchronous providers", path: "/fundamentals/asynchronous-providers" },
        { name: "Dynamic modules", path: "/fundamentals/dynamic-modules" },
        { name: "Injection scopes", path: "/fundamentals/injection-scopes" },
        { name: "Circular dependency", path: "/fundamentals/circular-dependency" },
        { name: "Module reference", path: "/fundamentals/module-reference" },
        { name: "Lazy - loading modules", path: "/fundamentals/lazy-loading-modules" },
        { name: "Execution context", path: "/fundamentals/execution-context" },
        { name: "Lifecycle events", path: "/fundamentals/lifecycle-events" },
        { name: "Discovery service", path: "/fundamentals/discovery-service" },
        { name: "Platform agnosticism", path: "/fundamentals/platform-agnosticism" },
        { name: "Testing", path: "/testing" },
    ],
    "Techniques": [
        { name: "Configuration", path: "/techniques/configuration" },
        { name: "Database", path: "/techniques/database" },
        { name: "Mongo", path: "/techniques/mongo" },
        { name: "Validation", path: "/techniques/validation" },
        { name: "Caching", path: "/techniques/caching" },
        { name: "Serialization", path: "/techniques/serialization" },
        { name: "Versioning", path: "/techniques/versioning" },
        { name: "Task scheduling", path: "/techniques/task-scheduling" },
        { name: "Queues", path: "/techniques/queues" },
        { name: "Logging", path: "/techniques/logging" },
        { name: "Cookies", path: "/techniques/cookies" },
        { name: "Events", path: "/techniques/events" },
        { name: "Compression", path: "/techniques/compression" },
        { name: "File upload", path: "/techniques/file-upload" },
        { name: "Streaming files", path: "/techniques/streaming-files" },
        { name: "HTTP module", path: "/techniques/http-module" },
        { name: "Session", path: "/techniques/session" },
        { name: "Model - View - Controller", path: "/techniques/model-view-controller" },
        { name: "Performance(Fastify)", path: "/techniques/performance-fastify" },
        { name: "Server - Sent Events", path: "/techniques/server-sent-events" },
    ],
    "Security": [
        { name: "Authentication", path: "/security/authentication" },
        { name: "Authorization", path: "/security/authorization" },
        { name: "Encryption and Hashing", path: "/security/encryption-and-hashing" },
        { name: "Helmet", path: "/security/helmet" },
        { name: "CORS", path: "/security/cors" },
        { name: "CSRF Protection", path: "/security/Csrf-protection" },
        { name: "Rate limiting", path: "/security/rate-limiting" },
    ],
    "GraphQL": [
        { name: "Quick start", path: "/graphQl/quick-start" },
        { name: "Resolvers", path: "/graphQl/resolvers" },
        { name: "Mutations", path: "/graphQl/mutations" },
        { name: "Subscriptions", path: "/graphQl/subscriptions" },
        { name: "Scalars", path: "/graphQl/scalars" },
        { name: "Directives", path: "/graphQl/directives" },
        { name: "Interfaces", path: "/graphQl/interfaces" },
        { name: "Unions and Enums", path: "/graphQl/unions-and-enums" },
        { name: "Field middleware", path: "/graphQl/field-middleware" },
        { name: "Mapped types", path: "/graphQl/mapped-types" },
        { name: "Plugins", path: "/graphQl/plugins" },
        { name: "Complexity", path: "/graphQl/complexity" },
        { name: "Extensions", path: "/graphQl/extensions" },
        { name: "CLI Plugin", path: "/graphQl/cli-plugin" },
        { name: "Generating SDL", path: "/graphQl/generating-sdl" },
        { name: "Sharing models", path: "/graphQl/sharing-models" },
        { name: "Other features", path: "/graphQl/other-features" },
        { name: "Federation", path: "/graphQl/federation" }
    ]
};

function LeftPanel() {
    const { isDarkMode, isDrawerOpen } = useSelector((state: RootState) => state.states);
    const [indexOfTopicOpen, setIndexOfTopicOpen] = useState<number>(-1);
    const modeCSS = isDarkMode ? style.darkMode : style.lightMode;
    const subTopicCSS = isDarkMode ? style.darkSubTopic : style.lightSubTopic;
    const path = usePathname();
    const handleOpenSubTopics = (index: number) => {
        setIndexOfTopicOpen(index === indexOfTopicOpen ? -1 : index);
    }

    return (
        <Box className={`${modeCSS} ${isDrawerOpen ? style.drawer : style.displayNone}`}>
            <Link href={'/'}>
                <Typography className={`${style.topic} ${path === '/' && style.activeLink}  ${style.introduction} ${!isDarkMode && style.lightModeText}`}>Introduction</Typography>
            </Link>
            <Box>
                {Object.keys(navbarHeadings).map((topic, index) => (
                    <Accordion
                        elevation={0}
                        className={`${modeCSS} ${style.accordion}`} key={index} expanded={index === indexOfTopicOpen}
                        disableGutters
                    >
                        <AccordionSummary
                            id="panel-header"
                            aria-controls="panel-content"
                            onClick={() => { handleOpenSubTopics(index); }}
                            expandIcon={<KeyboardArrowDownIcon className={`${style.expandedIcon} ${index === indexOfTopicOpen && style.activeLink} ${!isDarkMode && style.lightModeText}`} />}
                            className={`${style.topic} ${!isDarkMode && style.lightModeText}`}
                            classes={{
                                content: style.accordionSummaryContent
                            }}
                        >
                            {topic}
                        </AccordionSummary>
                        <AccordionDetails className={style.summary}>
                            {navbarHeadings[topic].map((subTopic, index) => (
                                <Link href={subTopic.path} key={index}>
                                    <ListItem
                                        className={`${modeCSS} ${subTopicCSS} ${path === subTopic.path && style.activeLink}`}
                                    >
                                        {subTopic.name}
                                    </ListItem>
                                </Link>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    )
}

export default LeftPanel;